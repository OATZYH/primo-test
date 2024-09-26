import { merge } from '../src/merge';

describe('merge function', () => {
  test('merges three sorted arrays correctly', () => {
    const collection_1 = [1, 4, 5];
    const collection_2 = [2, 3, 6];
    const collection_3 = [9, 7, 5];

    const expected = [1, 2, 3, 4, 5, 5, 6, 7, 9];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const expected: number[] = [];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('one empty array', () => {
    const collection_1 = [1, 2, 3];
    const collection_2: number[] = [];
    const collection_3 = [6, 5, 4];

    const expected = [1, 2, 3, 4, 5, 6];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('all collections with one element', () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [3];

    const expected = [1, 2, 3];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('duplicate elements', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [1, 3, 5];
    const collection_3 = [5, 3, 1];

    const expected = [1, 1, 3, 3, 5, 5, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });
});
