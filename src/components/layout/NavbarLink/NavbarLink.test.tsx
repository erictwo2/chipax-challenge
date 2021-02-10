import React from 'react';
import { shallow } from 'enzyme';
import NavbarLink from './NavbarLink';

describe('Navbar Link', () => {
  test('It should render', () => {
    shallow(<NavbarLink href="https://www.linkedin.com/in/eric-hidalgo-72835b43">{}</NavbarLink>);
  });

  test('Link should be displayed', () => {
    const wrapper = shallow(<NavbarLink href="https://www.linkedin.com/in/eric-hidalgo-72835b43">{}</NavbarLink>);

    const element = wrapper.find({ 'data-testid': 'navbarlink' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('https://www.linkedin.com/in/eric-hidalgo-72835b43');
  });
});
