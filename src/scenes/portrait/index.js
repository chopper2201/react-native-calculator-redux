import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import * as appActions from '../../store/action/app';

type Props = {
	dispatch?: Function,
	displayValue?: String,
	previousValue?: String
};

@connect(({ app }) => {
	return {
		displayValue: app.displayValue,
		previousValue: app.previousValue,
		operator: app.operator,
	};
})

class CalculatorScene extends Component {
	props: Props;

	clearValue = () => {
		const { dispatch } = this.props;
		dispatch(appActions.clear());
	};

	getButtonValue = (value) => {
		const { dispatch } = this.props;
		dispatch(appActions.updateNumber(value));
	};

	getOperator = (value) => {
		const { dispatch } = this.props;
		dispatch(appActions.calculate(value));
	};

	getEqual = (value) => {
		const { dispatch } = this.props;
		dispatch(appActions.equal(value));
	};

	getPercentage = (value) => {
		const { dispatch } = this.props;
		dispatch(appActions.percentage(parseFloat(value) * 0.01));
	};

	getPosneg = (value) => {
		const { dispatch } = this.props;
		dispatch(appActions.posneg(parseFloat(value) * -1));
	};

	render() {
		const { displayValue, previousValue } = this.props;
		return <View style={styles.container}>
			<StatusBar barStyle="light-content"/>
			<SafeAreaView>
				<Text style={styles.resultText}>
					{Number(displayValue).toLocaleString()}
				</Text>
				<View style={styles.row}>
					<Button
						text="AC"
						theme="gray"
						onPress={() => this.clearValue()}
					/>
					<Button
						text="+/-"
						theme="gray"
						onPress={() => this.getPosneg(displayValue)}
					/>
					<Button
						text="%"
						theme="gray"
						onPress={() => this.getPercentage(displayValue)}
					/>
					<Button
						text="/"
						theme="yellow"
						onPress={() => this.getOperator('device')}
					/>
				</View>
				<View style={styles.row}>
					<Button
						text="7"
						onPress={() => this.getButtonValue('7')}
					/>
					<Button
						text="8"
						onPress={() => this.getButtonValue('8')}
					/>
					<Button
						text="9"
						onPress={() => this.getButtonValue('9')}
					/>
					<Button
						text="x"
						theme="yellow"
						onPress={() => this.getOperator('multiple')}
					/>
				</View>
				<View style={styles.row}>
					<Button
						text="4"
						onPress={() => this.getButtonValue('4')}
					/>
					<Button
						text="5"
						onPress={() => this.getButtonValue('5')}
					/>
					<Button
						text="6"
						onPress={() => this.getButtonValue('6')}
					/>
					<Button
						text="-"
						theme="yellow"
						onPress={() => this.getOperator('sub')}
					/>
				</View>
				<View style={styles.row}>
					<Button
						text="1"
						onPress={() => this.getButtonValue('1')}
					/>
					<Button
						text="2"
						onPress={() => this.getButtonValue('2')}
					/>
					<Button
						text="3"
						onPress={() => this.getButtonValue('3')}
					/>
					<Button
						text="+"
						theme="yellow"
						onPress={() => this.getOperator('plus')}
					/>
				</View>
				<View style={styles.row}>
					<Button
						text="0"
						size="large"
						onPress={() => this.getButtonValue('0')}
					/>
					<Button
						text="."
						onPress={() => this.getButtonValue('.')}
					/>
					<Button
						text="="
						theme="yellow"
						onPress={() => this.getEqual(previousValue)}
					/>
				</View>
			</SafeAreaView>
		</View>;
	}
}

export default CalculatorScene;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#202020',
		justifyContent: 'flex-end'
	},
	row: {
		flexDirection: 'row',
	},
	resultContainer: {
		borderWidth: 1,
		borderColor: '#c3c3c3',
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: 'flex-end',
		marginVertical: 50,
		marginHorizontal: 10
	},
	resultText: {
		color: '#fff',
		fontSize: 40,
		fontWeight: '600',
		textAlign: 'right',
		marginRight: 10,
	},
});
