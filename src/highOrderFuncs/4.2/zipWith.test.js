import { zipWith } from './zipWith';
test('returns array numbers', () => {
    expect(zipWith(Math.pow, [10, 10], [0, 1, 4])).toEqual([1, 10]);
    expect(zipWith(Math.min, [1], [])).toEqual([]);
    expect(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])).toEqual([4, 7, 7, 4, 7, 7]);
    expect(zipWith((a, b) => a + b, [10, 10], [1, 0])).toEqual([11, 10]);
});