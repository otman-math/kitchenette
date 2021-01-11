import React from 'react';
import { mount, configure } from 'enzyme';
import Display from './Display';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {display}
 */
describe('Display Component', () => {
	it('DisplayComponent renders a display inside it', () => {
		const wrapper = mount(
			<Display content={"othmanet"}/>
		);
		expect(wrapper.exists('.display-3')).toBe(true);
	});
	
});
