import React from 'react';
import { shallow } from 'enzyme';
import Linkedin from './Linkedin';

describe('Linkedin', () => {
  test('It should render', () => {
    shallow(<Linkedin />);
  });
});
