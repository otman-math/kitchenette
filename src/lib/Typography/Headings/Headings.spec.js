import React from 'react';
import { mount, configure } from 'enzyme';
import Headings from './Headings';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {headings}
 */
describe('Headings Component', () => {
	it('HeadingsComponent renders a headings inside it', () => {
		const wrapper = mount(
			<Headings level={3}/>
		);
		expect(wrapper.exists('.h3')).toBe(true);
	});
	
});
