import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

export default ({ onPress, text, size, theme }) => {
	const buttonStyle = [styles.button];
	const textStyle = [styles.text];
	if (size === 'large') {
		buttonStyle.push(styles.largeButton);
	}

	if (theme === 'gray') {
		buttonStyle.push(styles.buttonGray);
		textStyle.push(styles.textGray);
	} else if (theme === 'yellow') {
		buttonStyle.push(styles.buttonYellow);
	}

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
};

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: '600'
	},
	textGray: {
		color: '#202020',
		fontWeight: '400'
	},
	button: {
		backgroundColor: '#404040',
		flex: 1,
		height: Math.floor(buttonWidth - 10),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: Math.floor(buttonWidth),
		margin: 5,
	},
	buttonGray: {
		backgroundColor: '#A6A6A6'
	},
	buttonYellow: {
		backgroundColor: '#F09A36'
	},
	largeButton: {
		width: screen.width / 2 - 10,
		flex: 0,
		alignItems: 'flex-start',
		paddingLeft: 40
	}
});
