import * as Actions from '../actions';

export function clear() {
	return { type: Actions.Clear };
}

export function updateNumber(value) {
	return { type: Actions.UpdateNumber, value };
}

export function calculate(value) {
	return { type: Actions.Calculate, value };
}

export function equal(value) {
	return { type: Actions.Equal, value };
}
