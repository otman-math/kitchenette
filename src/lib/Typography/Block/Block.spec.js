import React from 'react';
import { mount, configure } from 'enzyme';
import Block from './Block';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {block}
 */
describe('Block Component', () => {
	it('BlockComponent renders a block inside it', () => {
		const wrapper = mount(
			<Block content={"othmanet"}/>
		);
		expect(wrapper.exists('.blockquote')).toBe(true);
	});
	
});
