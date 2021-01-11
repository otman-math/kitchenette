import React from 'react';
import { mount, configure } from 'enzyme';
import Mention from './Mention';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {Mention}
 */
describe('Mention Component', () => {
	it('MentionComponent renders the text inside it', () => {
		const wrapper = mount(
			<Mention text={"faical"}/>
		);
		expect(wrapper.exists('.media')).toBe(true);
	});
	
});
