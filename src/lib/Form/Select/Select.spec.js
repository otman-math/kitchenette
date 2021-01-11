import React from 'react';
import { mount, configure } from 'enzyme';
import Select from './Select';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {select}
 */
describe('Select Component', () => {
	it('SelectComponent renders many options inside it', () => {
		const wrapper = mount(
			<Select classes="form-group"/>
		);
		const select = wrapper.find('select');
		console.log(select.classes);
	});
	
});
