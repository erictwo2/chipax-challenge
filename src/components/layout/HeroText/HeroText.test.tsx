import React from 'react';
import { shallow } from 'enzyme';
import HeroText from './HeroText';

describe('Hero Text', () => {
  test('It should render', () => {
    shallow(<HeroText text="Welcome to the Chipax challenge solved by Eric Hidalgo." />);
  });

  test('Text should be displayed', () => {
    const wrapper = shallow(<HeroText text="Welcome to the Chipax challenge solved by Eric Hidalgo." />);

    const element = wrapper.find({ 'data-testid': 'hero-text' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Welcome to the Chipax challenge solved by Eric Hidalgo.');
  });
});
