import React from 'react';
import { mount, configure } from 'enzyme';
import MediaIcon from './MediaIcon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {mediaIcon}
 */
describe('Media Component', () => {
	it('MediaIconComponent renders social media icons inside it', () => {
		const wrapper = mount(
			<MediaIcon mediaType={"twitter"}/>
		);
		const media = wrapper.find('media');
		console.log(media.mediaType);
	});
	
});
