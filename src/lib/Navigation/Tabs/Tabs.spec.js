import React from 'react';
import {mount, configure} from 'enzyme';
import Tabs from './Tabs';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const tabsComponents = [
  {
    tab: 'Tab 1',
    content: <p>Text 1</p>
  },
  {
    tab: 'Tab 2',
    content: <p>Text 2</p>
  },
  {
    tab: 'Tab 3',
    content: <p>Text 3</p>
  }
];

/**
 * @test {Tabs}
 */
describe('Tabs Component', () => {
  it('should render tabs correctly', () => {
    const wrapper = mount(
      <Tabs components={tabsComponents}/>
    );
    expect(wrapper.find('.nav').children().length).toBe(3);
    expect(wrapper.find('.tab-content').children().length).toBe(3);
    const ids = [];
    wrapper.find('.nav').children().forEach(node => {
      ids.push(node.prop('href').substring(1));
    });
    wrapper.find('.tab-content').children().forEach(node => {
      expect(ids.includes(node.prop('id'))).toBe(true);
    });
  });
});
