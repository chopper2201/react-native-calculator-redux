import * as Actions from '../actions';

const initialState = {
	counter: 0,
	displayValue: 0,
	operator: '',
	previousValue: '',
};
handleNumber = (value) => {
	let check = /^0[0-9]+/;
	if (value.length > 1) {
		if (check.test(value)) {
			return value.substr(1);
		} else return value;
	} return value;
};

handleChange = (value, state) => {
	if (value === 'plus') {
		return {
			operator: 'plus',
			previousValue: state.displayValue,
			displayValue: 0
		};
	} else if (value === 'device') {
		return {
			operator: 'device',
			previousValue: state.displayValue,
			displayValue: 0
		};
	} else if (value === 'multiple') {
		return {
			operator: 'multiple',
			previousValue: state.displayValue,
			displayValue: 0
		};
	} else if (value === 'sub') {
		return {
			operator: 'sub',
			previousValue: state.displayValue,
			displayValue: 0
		};
	}
};

handleEuqal = (value, state) => {
	if (state.operator === 'plus') {
		return parseInt(value) + parseInt(state.displayValue)
	}
	if (state.operator === 'device') {
		return parseInt(value) / parseInt(state.displayValue)
	}
	if (state.operator === 'multiple') {
		return parseInt(value) * parseInt(state.displayValue)
	}
	if (state.operator === 'sub') {
		return parseInt(value) - parseInt(state.displayValue)
	}
}

export default (state = initialState, action) => {
	switch (action.type) {
	case Actions.IncreaseCounter:
		return { ...state, counter: state.counter + action.volume };
	case Actions.UpdateNumber:
		let result = `${state.displayValue}${action.value}`;
		return {
			...state,
			displayValue: handleNumber(result)
		};
	case Actions.Calculate:
		return {
			...handleChange(action.value, state)
		};
	case Actions.Equal: 
		return {
			...state,
			displayValue: handleEuqal(action.value, state)
		}
	case Actions.Clear:
		return initialState;
	default:
		return state;
	}
};
