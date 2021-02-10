import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('It should render', () => {
    shallow(<Navbar />);
  });

  test('Logo should be displayed', () => {
    const wrapper = shallow(<Navbar />);

    const element = wrapper.find({ 'data-testid': 'logo' });
    expect(element.length).toEqual(1);
  });

  test('Linkedin link should be displayed', () => {
    const wrapper = shallow(<Navbar />);

    const element = wrapper.find({ 'data-testid': 'linkedin-link' });
    expect(element.length).toEqual(1);
  });

  test('Linkedin icon should be displayed', () => {
    const wrapper = shallow(<Navbar />);

    const element = wrapper.find({ 'data-testid': 'linkedin-icon' });
    expect(element.length).toEqual(1);
  });

  test('Github link should be displayed', () => {
    const wrapper = shallow(<Navbar />);

    const element = wrapper.find({ 'data-testid': 'github-link' });
    expect(element.length).toEqual(1);
  });

  test('Github icon should be displayed', () => {
    const wrapper = shallow(<Navbar />);

    const element = wrapper.find({ 'data-testid': 'github-icon' });
    expect(element.length).toEqual(1);
  });
});
