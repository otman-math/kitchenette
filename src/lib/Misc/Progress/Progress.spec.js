import React from 'react';
import { mount, configure } from 'enzyme';
import Progress from './Progress';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {Progress}
 */
describe('Progress Component', () => {
	it('Progress renders value inside it', () => {
		const wrapper = mount(
			<Progress value={10} size={'xs'} showLabel={false}/>
		);
		expect(wrapper.exists('.progress')).toBe(true);

	});

});
