import React from 'react';
import { mount, configure } from 'enzyme';
import Toggle from './Toggle';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {toggle}
 */
describe('Toggle Component', () => {
	it('ToggleComponent renders the text inside it', () => {
		const wrapper = mount(
			<Toggle checked/>
		);
		const toggle = wrapper.find('toggle');
		console.log(toggle.checked);
	});
});
