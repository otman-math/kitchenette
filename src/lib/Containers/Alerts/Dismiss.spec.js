import React from 'react';
import { mount, configure } from 'enzyme';
import Dismiss from './Dismiss';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {Dismiss}
 */
describe('Dismiss Component', () => {
	it('DismissComponent renders an alert with close inside it', () => {
		const wrapper = mount(
			<Dismiss content="blabla"/>
		);
		const dismiss = wrapper.find('dismiss');
		console.log(dismiss.content);
	});
	
});
