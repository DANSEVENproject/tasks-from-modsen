import sumAverage from './sumAverage';
test('returned acc arithmetic mean', () => {
    expect(
        sumAverage([
            [2, 1, 5, 4, 3],
            [2, 5, 3],
        ])
    ).toBe(6);
});