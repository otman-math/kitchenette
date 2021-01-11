import React from 'react';
import { mount, configure } from 'enzyme';
import Video_Nat from './Video_Nat';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {videoNat}
 */
describe('videoNative Component', () => {
	it('videoNatComponent renders native video inside it', () => {
		const wrapper = mount(
			<Video_Nat type={"mp4"}/>
		);
		const video = wrapper.find('video');
		console.log(video.type);
	});
	
});
