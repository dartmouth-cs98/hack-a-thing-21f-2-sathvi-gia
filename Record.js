import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { NoteOne } from './constants/Colors'

const Record = ({ navigation }) => {
	const [recording, isRecording] = useState(false);
	const [recording, isDoneRecording] = useState(false);
	const fileUrl = useState(null);



	return (
		<View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: NoteOne }]}
                    title="Go to Xylophone page"
                    onPress={() =>
                        navigation.navigate('Xylophone')
                    }
                >
                    <Text style={styles.buttonText}>Xylophone</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: Green }]}
                    onPress={() => this.isRecording()}
                >
                    <Text style={styles.buttonText}>Press to Record Voice</Text>
                </TouchableOpacity>
            </View>
			<View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: Red }]}
                    onPress={() => this.isDoneRecording()}
                >
                    <Text style={styles.buttonText}>Press to STOP Recording</Text>
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
});

export default Record;