import React from 'react';
import { mount, configure } from 'enzyme';
import LegendArrow from './LegendArrow';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {LegendArrow}
 */
describe('LegendArrow Component', () => {
	it('LegendArrow renders value inside it', () => {
		const wrapper = mount(
			<LegendArrow data={[
				{value: '9.1 k', subLabel: "people talking about", icon: {icon:"map", type: "regular", size: 40}},
				{value: '18 k', subLabel: "mentions", icon: {icon:"compass", type: "regular", size: 40}},
				{value: '4 m', subLabel: "estimated reach", icon: {icon:"comments", type: "regular", size: 40}},
				{value: '31.2 k', subLabel: "social interactions", icon: {icon:"newspaper", type: "regular", size: 40}}
			]}/>
		);
		expect(wrapper.exists('.legend-arrows')).toBe(true);

	});

});
