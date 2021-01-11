import React from 'react';
import { mount, configure } from 'enzyme';
import Textarea from './Textarea';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {textarea}
 */
describe('Textarea Component', () => {
	it('TextareaComponent renders a textarea inside it', () => {
		const wrapper = mount(
			<Textarea row="3"/>
		);
		const textarea = wrapper.find('textarea');
		console.log(textarea.row);
	});
	
});
