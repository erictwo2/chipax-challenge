import React from 'react';
import { shallow } from 'enzyme';
import Pill from './Pill';

describe('Pill', () => {
  test('It should render', () => {
    shallow(<Pill text="Earth (C-137)" />);
  });

  test('Text should be displayed', () => {
    const wrapper = shallow(<Pill text="Earth (C-137)" />);

    const element = wrapper.find({ 'data-testid': 'pill' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Earth (C-137');
  });
});
