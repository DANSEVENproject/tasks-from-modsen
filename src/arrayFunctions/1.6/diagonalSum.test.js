import { diagonalSum } from './diagonalSum';
test('returns diagonal multiplication of numbers', () => {
    expect(
        diagonalSum([
            [1, 5, 6],
            [6, 3, 3],
            [6, 9, 5],
        ])
    ).toBe(9);
    expect(
        diagonalSum([
            [],
            [6, 3, 5],
            [7, -1, '5'],
            [5, 5, 5]
        ])
    ).toBe(10);
    expect(
        diagonalSum([
            [],
            [],
        ])
    ).toBe(0);
});