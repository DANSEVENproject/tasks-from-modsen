import { uniqueSum } from './uniqueSum';
test('returns the addition of numbers', () => {
    expect(uniqueSum([5, 753, 123])).toEqual(881);
    expect(uniqueSum([])).toEqual(0);
});