import React from 'react';
import { mount, configure } from 'enzyme';
import Navbar from './Navbar';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {navbar}
 */
describe('Navbar Component', () => {
	it('NavbarComponent renders a navbar inside it', () => {
		const wrapper = mount(
			<Navbar type={"faical"}/>
		);
		const navbar = wrapper.find('navbar');
		console.log(navbar.type);
	});

});
