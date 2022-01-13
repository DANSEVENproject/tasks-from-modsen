import diagonalSum from './diagonalSum';
test('returns diagonal multiplication of numbers', () => {
    expect(
        diagonalSum([
            [1, 5, 6],
            [6, 3, 3],
            [6, 9, 5],
        ])
    ).toBe(9);
});