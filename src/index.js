import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';

import { ruuiStore, appStore } from './store';
import CalculatorScene from './scenes/portrait/index';
import CalculatorLandscapeScene from './scenes/landscape';


type Props = {
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

class App extends Component {
	props: Props;

	constructor(props) {
		super(props);
		this.state = {
			orientation: 'portrait',
		};
	}

	getOrientationScreen = () => {
		const screen = Dimensions.get('window');
		if (screen.width > screen.height) {
			this.setState({ orientation: 'landscape' });
		} else {
			this.setState({ orientation: 'portrait' });
		}
	};

	componentDidMount() {
		console.disableYellowBox = true;
		Dimensions.addEventListener('change', () => {
			this.getOrientationScreen();
		});
	}


	render() {
		const { orientation } = this.state;
		console.log(orientation);

		return <View style={styles.container}>
			{orientation === 'landscape' ? <CalculatorLandscapeScene /> : <CalculatorScene />}
		</View>;
	}
}

function AppContainer(props) {
	return <RuuiProvider store={ruuiStore}>
		<Provider store={appStore}>
			<App/>
		</Provider>

		<Tooltip/>
	</RuuiProvider>;
}

export default AppContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
