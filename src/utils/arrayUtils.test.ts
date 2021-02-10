import { getSequentialArray } from './arrayUtils';

describe('Array Utils', () => {
  test('It should return a array of integers from 1 to 5', () => {
    const array = getSequentialArray(1, 5);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  test('It should return a array of integers from 9 to 12', () => {
    const array = getSequentialArray(9, 12);

    expect(array).toEqual([9, 10, 11, 12]);
  });

  test('It should return a array of integers from -2 to 2', () => {
    const array = getSequentialArray(-2, 2);

    expect(array).toEqual([-2, -1, 0, 1, 2]);
  });

  test('It should give an error', () => {
    expect(() => {
      getSequentialArray(4, 2);
    }).toThrow(Error);
  });
});
