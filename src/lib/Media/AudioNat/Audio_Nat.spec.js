import React from 'react';
import { mount, configure } from 'enzyme';
import Audio_Nat from './Audio_Nat';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {audioNat}
 */
describe('audioNative Component', () => {
	it('audioNatComponent renders native audio inside it', () => {
		const wrapper = mount(
			<Audio_Nat type={"othmanet"}/>
		);
		const audio = wrapper.find('audio');
		console.log(audio.type);
	});
	
});
