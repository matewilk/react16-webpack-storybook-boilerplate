import React from 'react';
import Example from '../../../client/app/components/Example';

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
