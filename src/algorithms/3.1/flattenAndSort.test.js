import { flattenAndSort } from './flattenAndSort';
test('returned sort array', () => {
    expect(flattenAndSort([
        [1, 2, 1],
        [3, 2, 1],
        [4, 6, 5],
        [],
        [155, 225, 222],
        []
    ])).toEqual([
        1, 1, 1, 2, 2, 3, 4, 5, 6, 155, 222, 225
    ]);
    expect(flattenAndSort([1, [24, 23],
        [],
        [2, 5.7, 5]
    ])).toEqual([1, 2, 5, 5.7, 23, 24]);
    expect(flattenAndSort([], [])).toEqual([]);
    expect(flattenAndSort([
        [-1], -1, [3, 4, 2]
    ])).toEqual([-1, -1, 2, 3, 4]);
});