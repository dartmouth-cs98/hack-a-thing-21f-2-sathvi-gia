import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';

import {
	NoteOne,
	NoteTwo,
	NoteThree,
	NoteFour,
	NoteFive,
	NoteSix,
	NoteSeven
} from './constants/Colors'


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

export default function App() {
	// function that will play the correct note based on which button was pressed
	handlePlaySound = async note => {
		// create a new sound object, bc every time we play sound --> have to create a new object
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

  return (
    <View style={styles.container}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteOne }]}
					onPress={() => this.handlePlaySound('one')}
				>
					<Text style={styles.buttonText}>Note 1</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteTwo }]}
					onPress={() => this.handlePlaySound('two')}
				>
					<Text style={styles.buttonText}>Note 2</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteThree }]}
					onPress={() => this.handlePlaySound('three')}
				>
					<Text style={styles.buttonText}>Note 3</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteFour }]}
					onPress={() => this.handlePlaySound('four')}
				>
					<Text style={styles.buttonText}>Note 4</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteFive }]}
					onPress={() => this.handlePlaySound('five')}
				>
					<Text style={styles.buttonText}>Note 5</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteSix }]}
					onPress={() => this.handlePlaySound('six')}
				>
					<Text style={styles.buttonText}>Note 6</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteSeven }]}
					onPress={() => this.handlePlaySound('seven')}
				>
					<Text style={styles.buttonText}>Note 7</Text>
				</TouchableOpacity>
			</View>
		</View>
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
})