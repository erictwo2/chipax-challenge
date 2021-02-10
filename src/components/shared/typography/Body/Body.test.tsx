import React from 'react';
import { shallow } from 'enzyme';
import { Body1 } from './index';

describe('Body', () => {
  test('It should render', () => {
    shallow(<Body1 text="Welcome to the Chipax challenge" />);
  });

  test('Text should be displayed', () => {
    const wrapper = shallow(<Body1 text="Welcome to the Chipax challenge." />);

    const element = wrapper.find({ 'data-testid': 'body1' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Welcome to the Chipax challenge.');
  });
});
