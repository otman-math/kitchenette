import React from 'react';
import { mount, configure } from 'enzyme';
import Lead from './Lead';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {lead}
 */
describe('Lead Component', () => {
	it('LeadComponent renders a lead text inside it', () => {
		const wrapper = mount(
			<Lead content={"othmanet"}/>
		);
		expect(wrapper.exists('.lead')).toBe(true);
	});
	
});
