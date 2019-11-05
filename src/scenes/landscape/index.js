import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class CalculatorLandscapeScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>CalculatorLandscapeScene</Text>
		</View>;
	}
}

export default CalculatorLandscapeScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
