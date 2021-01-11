import React from 'react';
import { mount, configure } from 'enzyme';
import ButtonGroup from './ButtonGroup';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {buttongroup}
 */
describe('ButtonGroup Component', () => {
	it('ButtonGroupComponent renders a group of buttons inside it', () => {
		const wrapper = mount(
			<ButtonGroup type={"danger"}/>
		);
		const buttongroup = wrapper.find('buttongroup');
		console.log(buttongroup.type);
	});
	
});
