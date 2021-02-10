import React from 'react';
import { shallow } from 'enzyme';
import Github from './Github';

describe('Github', () => {
  test('It should render', () => {
    shallow(<Github />);
  });
});
