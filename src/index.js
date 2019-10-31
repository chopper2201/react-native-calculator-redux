import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';

import { ruuiStore, appStore } from './store';
import * as appActions from './store/action/app';
import CalculatorScene from './scenes';


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

	render() {
		return <View style={styles.container}>
			<CalculatorScene/>
		</View>;
	}

	increaseCounter = () => {
		this.props.dispatch(appActions.increaseCounter());
	};
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
