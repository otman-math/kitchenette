import React from 'react';
import { mount, configure } from 'enzyme';
import InfluencerMedia from './InfluencerMedia';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @test {InfluencerMedia}
 */
describe('InfluencerMedia Component', () => {
  it('InfluencerMedia render correctly (default props)', () => {
    const wrapper = mount(
      <InfluencerMedia />
    );
    expect(wrapper.exists('.figure')).toBe(true);
    expect(wrapper.exists('.figure-img')).toBe(true);
    expect(wrapper.exists('.img-64')).toBe(true);
  });
});
