import React from 'react';
import { mount, configure } from 'enzyme';
import Abbrev from './Abbrev';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {Abbrev}
 */
describe('Abbrev Component', () => {
	it('AbbrevComponent renders abbreviation inside it', () => {
		const wrapper = mount(
			<Abbrev title={"othmanet"}/>
		);
		const abbrev = wrapper.find('abbr');
		expect(abbrev.prop('title')).toBe("othmanet");
	});
	
});
