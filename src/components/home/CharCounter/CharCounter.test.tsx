import React from 'react';
import { shallow } from 'enzyme';
import CharCounter from './CharCounter';

describe('Char Counter', () => {
  test('It should render', () => {
    shallow(<CharCounter total={12} text="Total time" suffix="s" />);
  });

  test('Description should be displayed', () => {
    const wrapper = shallow(<CharCounter total={12} text="Total time" suffix="s" />);

    const element = wrapper.find({ 'data-testid': 'char-counter-description' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Total time');
  });
});
