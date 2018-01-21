import C from '../../client/app/constants';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../../client/app/store';

import { actionOne } from "../../client/app/actions/actions";

const initialState = {};

// create the store
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

describe('actionOne', () => {
	const stateProp = []; // for example a list of objects (list)

	beforeAll(() => {
		store.dispatch(actionOne())
	});

	// one "it" for every property of a changed state (for simple states)
	it('should do something that actionOne does', () =>
		// specific state under test to be expected here
		expect(store.getState().reducer).toEqual({})
	)
});
