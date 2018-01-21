import C from '../../client/app/constants';
import { reducer } from '../../client/app/store/reducers';

describe('some Reducer', () => {
	it('DOES_SOMETHING success', () => {
		const state = {};
		const action = {
			type: C.ACTION_ONE,
			prop: 'some prop'
		};

		const results = reducer(state, action);

		expect(results).toEqual({})
	})
});
