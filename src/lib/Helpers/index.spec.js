import React from 'react';
import {mount, configure, shallow} from 'enzyme';
import {getClasses, renderHead} from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

/**
 * @test {renderHead}
 */
describe('renderHead() function', () => {
  it('should render head tag correctly', () => {
    const wrapper = shallow(renderHead(4, 'Header 4'));
    expect(wrapper.type()).toBe('h4');
    expect(wrapper.text()).toBe('Header 4');
  });
  it('should render head tag correctly with default arguments', () => {
    const wrapper = shallow(renderHead());
    expect(wrapper.type()).toBe('h3');
    expect(wrapper.text()).toBe('Header 3');
  });
});

/**
 * @test {getClasses}
 */
describe('getClasses() function', () => {
  it('should return combined classes', () => {
    const result = getClasses(
      null,
      'class1',
      ['class2', 'class3', 'class4'],
      undefined,
      'class5',
      []
    );
    expect(result).toBe('class1 class2 class3 class4 class5');
  });
});