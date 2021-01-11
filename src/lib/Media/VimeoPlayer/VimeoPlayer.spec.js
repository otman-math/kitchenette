import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VimeoPlayer from './VimeoPlayer';

configure({adapter: new Adapter()});

/**
 * @test {VimeoPlayer}
 */
describe('VimeoPlayer component', () => {
  it('should render Vimeo embed player', () => {
    const wrapper = mount(
      <VimeoPlayer id='123' w='16' h='9' fullScreen/>
    );
    expect(wrapper.find('.embed-responsive-16by9').exists()).toBe(true);
    expect(wrapper.find('iframe').exists()).toBe(true);
    expect(wrapper.find('iframe').prop('src')).toBe('https://player.vimeo.com/video/123');
    expect(wrapper.find('iframe').prop('allowFullScreen')).toBe(true);
  });
});
