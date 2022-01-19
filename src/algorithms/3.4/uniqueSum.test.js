import { uniqueSum } from './uniqueSum';
test('returns the addition of numbers', () => {
    expect(uniqueSum([5, 753, 123])).toBe(881);
    expect(uniqueSum([])).toBe(0);
    expect(uniqueSum(['6', [], 5, 5, 5, 1, -5, 4, 3])).toBe(14);
    expect(uniqueSum([], [])).toBe(0);
});