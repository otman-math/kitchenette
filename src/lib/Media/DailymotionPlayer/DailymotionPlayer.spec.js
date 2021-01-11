import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DailymotionPlayer from './DailymotionPlayer';

configure({adapter: new Adapter()});

/**
 * @test {DailymotionPlayer}
 */
describe('DailymotionPlayer component', () => {
  it('should render Dailymotion embed player', () => {
    const wrapper = mount(
      <DailymotionPlayer id='123' w='16' h='9' fullScreen/>
    );
    expect(wrapper.find('.embed-responsive-16by9').exists()).toBe(true);
    expect(wrapper.find('iframe').exists()).toBe(true);
    expect(wrapper.find('iframe').prop('src')).toBe('https://www.dailymotion.com/embed/video/123');
    expect(wrapper.find('iframe').prop('allowFullScreen')).toBe(true);
  });
});
