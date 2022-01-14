import { zipWith } from './zipWith';
test('returns array numbers', () => {
    expect(zipWith(Math.pow, [10, 10], [0, 1, 4])).toEqual([1, 10]);
});