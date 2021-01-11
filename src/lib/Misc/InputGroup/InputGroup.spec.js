import React from 'react';
import { mount, configure } from 'enzyme';
import InputGroup from './InputGroup';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {inputGroup}
 */
describe('InputGroup Component', () => {
	it('InputGroupComponent renders the text inside it', () => {
		const wrapper = mount(
			<InputGroup value={"faical"}/>
		);
		expect(wrapper.exists('.input-group')).toBe(true);
	});
	
});
