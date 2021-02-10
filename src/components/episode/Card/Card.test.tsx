import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Episode Card', () => {
  const episode = {
    name: 'Pilot',
    season: 1,
    episode: 1,
    originsOfCharacters: ['Earth (C-137)', 'Bepis 9', 'Gromflom Prime']
  };

  test('It should render', () => {
    shallow(<Card episode={episode} />);
  });

  test('Name should be displayed', () => {
    const wrapper = shallow(<Card episode={episode} />);

    const element = wrapper.find({ 'data-testid': 'episode-name' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain('Pilot');
  });

  test('Description should be displayed', () => {
    const wrapper = shallow(<Card episode={episode} />);

    const element = wrapper.find({ 'data-testid': 'episode-description' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain(`Season ${episode.season} - Episode ${episode.episode}`);
  });

  test('Number of character locations should be displayed', () => {
    const wrapper = shallow(<Card episode={episode} />);

    const element = wrapper.find({ 'data-testid': 'number-character-locations' });
    expect(element.length).toEqual(1);
    expect(element.html()).toContain(`Number of character locations: ${episode.originsOfCharacters.length}`);
  });

  test('Origins of the characters should be displayed', () => {
    const wrapper = shallow(<Card episode={episode} />);

    episode.originsOfCharacters.forEach((origin, index) => {
      const element = wrapper.find({ 'data-testid': `character-origin-${index}` });
      expect(element.length).toEqual(1);
      expect(element.html()).toContain(`${origin}`);
    });
  });
});
