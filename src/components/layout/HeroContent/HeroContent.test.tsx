import React from 'react';
import { shallow } from 'enzyme';
import HeroContent from './HeroContent';

describe('Hero Content', () => {
  test('It should render', () => {
    shallow(<HeroContent>{}</HeroContent>);
  });
});
