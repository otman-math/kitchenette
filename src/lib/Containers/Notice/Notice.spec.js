import React from 'react';
import { mount, configure } from 'enzyme';
import Notice from './Notice';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {Notice}
 */
describe('Notice Component', () => {
	it('NoticeComponent renders the text inside it', () => {
		const wrapper = mount(
			<Notice title="it's an alert"/>
		);
		const notice = wrapper.find('notice');
		console.log(notice.title);
	});
	
});
