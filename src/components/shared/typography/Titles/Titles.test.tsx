import React from 'react';
import { shallow } from 'enzyme';
import { Title1, Title2, Title3 } from './index';

describe('Titles', () => {
  test('It should render', () => {
    shallow(<Title1 text="Title 1" />);
    shallow(<Title2 text="Title 2" />);
    shallow(<Title3 text="Title 3" />);
  });

  test('Text of Text1 should be displayed', () => {
    const wrapper = shallow(<Title1 text="Title 1" />);

    const element = wrapper.find({ 'data-testid': 'title1' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Title 1');
  });

  test('Text of Text2 should be displayed', () => {
    const wrapper = shallow(<Title2 text="Title 2" />);

    const element = wrapper.find({ 'data-testid': 'title2' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Title 2');
  });

  test('Text of Text3 should be displayed', () => {
    const wrapper = shallow(<Title3 text="Title 3" />);

    const element = wrapper.find({ 'data-testid': 'title3' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Title 3');
  });
});
