import React from 'react';
import { shallow } from 'enzyme';
import ButtonLink from './ButtonLink';

describe('Button Link', () => {
  test('It should render', () => {
    shallow(
      <ButtonLink
        label="INSTRUCTIONS"
        href="https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217"
      />
    );
  });

  test('Link and label should be displayed', () => {
    const wrapper = shallow(
      <ButtonLink
        label="INSTRUCTIONS"
        href="https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217"
      />
    );

    const element = wrapper.find({ 'data-testid': 'buttonlink' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217');
    expect(element.html()).toContain('INSTRUCTIONS');
  });
});
