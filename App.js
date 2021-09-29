import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Xylophone from './Xylophone';
import Record from './Record';

const Stack = createNativeStackNavigator();

// seven different sound files, one for each "button"/xylophone bar
const xyloSounds = {
	one: require('./assets/note1.wav'),
	two: require('./assets/note2.wav'),
	three: require('./assets/note3.wav'),
	four: require('./assets/note4.wav'),
	five: require('./assets/note5.wav'),
	six: require('./assets/note6.wav'),
	seven: require('./assets/note7.wav')
}

const App = () => {
	const [notesToPlayBack, setNotesToPlayback] = useState([]);
	const [recording, setRecording] = useState(false);
	const [playNotes, setPlayNotes] = useState(false);
	// function that will play the correct note based on which button was pressed
	handlePlaySound = async note => {
		if (recording) {
			setNotesToPlayback(notesToPlayBack.concat(note)) //appending the new note to the array + updating state
			console.log("notes array now:", notesToPlayBack);
		}
		// create a new sound object, bc every time we play sound --> have to create a new object
		const soundObject = new Audio.Sound()
		try {
			let source = xyloSounds[note]
			await soundObject.loadAsync(source)
			await soundObject
				.playAsync()
				.then(async playbackStatus => {
					console.log("playabledurationmillis", playbackStatus.playableDurationMillis);
					setTimeout(() => {
						soundObject.unloadAsync()
					}, playbackStatus.playableDurationMillis)
				})
				.catch(error => {
					console.log(error)
				})
		} catch (error) {
			console.log(error)
		}
	}

	record = () => {
		// maybe here we can
		setPlayNotes(false);
		setNotesToPlayback([]); // reset the notes when the user clicks the record button
		setRecording(true);
		console.log("playnotes", playNotes);
		console.log("recording", recording);
	}

	stopRecord = () => {
		setRecording(false)
		console.log("recording", recording);
	}

	handlePlayNotes = async () => {
		// go through array playNotes and play each note for a set amount of time
		// need to figure out how to do multiple notes in a row
		// probably something similar to handlePlaySound
		setPlayNotes(true);
		console.log("playnotes", playNotes);
		console.log("recording", recording);
		console.log("notes to play:", notesToPlayBack);
		// play the notes
		// setPlayNotes(false);

		for (let i = 0; i < notesToPlayBack.length; i++) {
			console.log(notesToPlayBack[i]);
			const note = notesToPlayBack[i];
			const soundObject = new Audio.Sound()
			try {
				let source = xyloSounds[note]
				await soundObject.loadAsync(source)
				await soundObject
					.playAsync()
					.then(async playbackStatus => {
						setTimeout(() => {
							soundObject.unloadAsync()
						}, playbackStatus.playableDurationMillis)
					})
					.catch(error => {
						console.log(error)
					})
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Xylophone"
					component={Xylophone}
					options={{ title: 'Xylophone' }}
				/>
				<Stack.Screen name="Record" component={Record} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		borderRadius: 25,
		marginTop: 50
	},
	buttonContainer: {
		height: 40,
		margin: 5
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 18
	}
});

export default App;