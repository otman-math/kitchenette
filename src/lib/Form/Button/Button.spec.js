import React from 'react';
import { mount, configure } from 'enzyme';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {Button}
 */
describe('Button Component', () => {
	it('ButtonComponent renders the text inside it', () => {
		const wrapper = mount(
			<Button ButtonName={"Click here"}/>
		);
		const button = wrapper.find('button');
		console.log(button.ButtonName);
	});
});
