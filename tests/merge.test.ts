import { merge } from '../src/merge';

describe('merge function', () => {
  test('merges three sorted arrays correctly', () => {
    const collection_1 = [1, 4, 5];
    const collection_2 = [2, 3, 6];
    const collection_3 = [9, 7, 5];

    const expected = [1, 2, 3, 4, 5, 5, 6, 7, 9];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('handles empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const expected: number[] = [];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('handles one empty array', () => {
    const collection_1 = [1, 2, 3];
    const collection_2: number[] = [];
    const collection_3 = [6, 5, 4];

    const expected = [1, 2, 3, 4, 5, 6];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('handles all collections with one element', () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [3];

    const expected = [1, 2, 3];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('handles collections with duplicate elements', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [1, 3, 5];
    const collection_3 = [5, 3, 1];

    const expected = [1, 1, 1, 3, 3, 3, 5, 5, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('merges arrays containing negative numbers', () => {
    const collection_1 = [-10, -5, 0];
    const collection_2 = [-7, -3, 2];
    const collection_3 = [5, 3, 1];

    const expected = [-10, -7, -5, -3, 0, 1, 2, 3, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('merges arrays with all negative numbers', () => {
    const collection_1 = [-8, -6, -4];
    const collection_2 = [-7, -5, -3];
    const collection_3 = [-1, -2, -9];

    const expected = [-9, -8, -7, -6, -5, -4, -3, -2, -1];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('merges arrays with mixed negative and positive numbers', () => {
    const collection_1 = [-5, -2, 3];
    const collection_2 = [-6, 0, 4];
    const collection_3 = [7, 5, -1];

    const expected = [-6, -5, -2, -1, 0, 3, 4, 5, 7];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('merges when collection_3 is empty', () => {
    const collection_1 = [1, 2, 3];
    const collection_2 = [4, 5, 6];
    const collection_3: number[] = [];

    const expected = [1, 2, 3, 4, 5, 6];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('merges when collection_1 and collection_2 are empty', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3 = [3, 2, 1];

    const expected = [1, 2, 3];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });
});
