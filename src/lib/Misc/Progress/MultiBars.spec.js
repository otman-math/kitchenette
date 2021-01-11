import React from 'react';
import { mount, configure } from 'enzyme';
import MultiBar from './MultiBars';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const bars = [
	{
		value: 15,
		color: 'red'
	},
	{
		value: 35,
		color: 'green'
	},
	{
		value: 50,
		color: 'yellow'
	}
];

/**
 * @test {MultiBar}
 */
describe('MultiBar Component', () => {
	it('MultiBar renders value inside it', () => {

		const wrapper = mount(
			<MultiBar bars={bars} size='lg'/>
		);
		expect(wrapper.exists('.progress')).toBe(true);

	});

});
