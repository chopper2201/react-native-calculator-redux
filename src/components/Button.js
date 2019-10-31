import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

export default ({ onPress, text, size, theme }) => {
	const buttonStyle = [styles.button];

	if (theme === 'gray') {
		buttonStyle.push(styles.buttonGray);
	} else if (theme === 'yellow') {
		buttonStyle.push(styles.buttonYellow);
	}

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
	text: {
		color: '#8390A2',
		fontSize: 25
	},
	button: {
		backgroundColor: '#F3F3F3',
		flex: 1,
		height: Math.floor(buttonWidth - 10),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: Math.floor(buttonWidth),
		margin: 5,
	},
	buttonGray: {
		backgroundColor: '#F3F3F3'
	},
	buttonYellow: {
		backgroundColor: '#F6C75B'
	}
});
