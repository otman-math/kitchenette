import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import YoutubePlayer from './YoutubePlayer';

configure({adapter: new Adapter()});

/**
 * @test {YoutubePlayer}
 */
describe('YoutubePlayer component', () => {
  it('should render Youtube embed player', () => {
    const wrapper = mount(
      <YoutubePlayer id='123' w='16' h='9' fullScreen/>
    );
    expect(wrapper.find('.embed-responsive-16by9').exists()).toBe(true);
    expect(wrapper.find('iframe').exists()).toBe(true);
    expect(wrapper.find('iframe').prop('src')).toBe('https://www.youtube.com/embed/123?rel=0');
    expect(wrapper.find('iframe').prop('allowFullScreen')).toBe(true);
  });
});
