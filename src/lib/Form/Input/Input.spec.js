import React from 'react';
import { mount, configure } from 'enzyme';
import Input from './Input';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {Input}
 */
describe('Input Component', () => {
	it('InputComponent renders an input inside it', () => {
		const wrapper = mount(
			<Input/>
		);
		const input = wrapper.find('input');
		console.log(input.value);
	});
});
