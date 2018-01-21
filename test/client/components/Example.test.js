import React from 'react';
import Example from '../../../client/app/components/Example';

// import { Provider } from 'react-redux';
// let wrapper;
// const _store = {
// 	dispatch: jest.fn(),
// 	subscribe: jest.fn(),
// 	getState: jest.fn(() =>
// 		({
// 			propOne: 'prop val',
// 			someFn: () => {}
// 		}))
// };
//
// beforeAll(() => wrapper = global.mount(
// 	<Provider store={_store}>
// 		<Example />
// 	</Provider>
// ));
// expect(wrapper.find()).toBe('');

describe('<Example /> UI Component', () => {
	it('renders component ', () =>
		expect(
			global.shallow(<Example />)
				.find('div.example')
				.length
		).toBe(1)
	);

	it('renders selected component ', () =>
		expect(
			global.shallow(<Example selected={true} />)
				.find('div.selected.example')
				.length
		).toBe(1)
	);

	it('invokes onClick', () => {
		const _click = jest.fn();

		global.shallow(<Example onClick={_click}/>)
			.find('div.example')
			.simulate('click')

		expect(_click).toBeCalled();
	})
});
