import { countCharacters } from './stringUtils';

describe('String Utils', () => {
  test('With the letter L it should find 2 occurrences', () => {
    const text = ['Lorem Ipsum is simply ', 'dummy text of the printing', ' and typesetting industry'];
    const charToFind = 'L';

    const total = countCharacters(text, charToFind);

    expect(total).toEqual(2);
  });

  test('With the letter S it should find 5 occurrences', () => {
    const text = ['Lorem Ipsum is simply ', 'dummy text of the printing', ' and typesetting industry'];
    const charToFind = 'S';

    const total = countCharacters(text, charToFind);

    expect(total).toEqual(5);
  });

  test('With the letter s it should find 5 occurrences', () => {
    const text = ['Lorem Ipsum is simply ', 'dummy text of the printing', ' and typesetting industry'];
    const charToFind = 's';

    const total = countCharacters(text, charToFind);

    expect(total).toEqual(5);
  });

  test('With the empty collection it should find 0 occurrences', () => {
    const text = [];
    const charToFind = 's';

    const total = countCharacters(text, charToFind);

    expect(total).toEqual(0);
  });
});
