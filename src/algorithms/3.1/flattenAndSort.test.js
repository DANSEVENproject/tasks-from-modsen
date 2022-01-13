import flattenAndSort from './flattenAndSort';
test('returned sort array', () => {
    expect(flattenAndSort([
        [3, 2, 1],
        [4, 6, 5],
        [],
        [155, 225, 222]
    ])).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '155',
        '222',
        '225',
    ]);
});