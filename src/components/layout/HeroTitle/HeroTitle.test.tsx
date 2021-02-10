import React from 'react';
import { shallow } from 'enzyme';
import HeroTitle from './HeroTitle';

describe('Hero Title', () => {
  test('It should render', () => {
    shallow(<HeroTitle title="RICK AND MORTY." />);
  });

  test('Title should be displayed', () => {
    const wrapper = shallow(<HeroTitle title="RICK AND MORTY." />);

    const element = wrapper.find({ 'data-testid': 'hero-title' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('RICK AND MORTY.');
  });
});
