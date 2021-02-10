import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Hero', () => {
  test('It should render', () => {
    shallow(<Hero>{}</Hero>);
  });
});
