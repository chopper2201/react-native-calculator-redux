import * as Actions from '../actions';

export function increaseCounter(volume = 1) {
	return { type: Actions.IncreaseCounter, volume };
}

export function clear() {
	return { type: Actions.Clear };
}

export function updateNumber(value) {
	return { type: Actions.UpdateNumber, value};
}

export function calculate(value) {
	return { type: Actions.Calculate, value }
}

export function equal(value) {
	return { type: Actions.Equal, value }
}