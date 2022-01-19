import { reduce } from './reduce';
test('returns multiplication of numbers', () => {
    expect(reduce([1, 2, 34, 4], (acc, value) => acc * value, 4)).toBe(1088);
    expect(reduce([1, 2, 34, 4], (acc, value) => acc * value)).toBe(272);
    expect(reduce([1, 2, 34, 4], (acc, item) => acc + item, 5)).toBe(46);
    expect(reduce(['h', 'e', 'l', 'l', 'o'], (acc, item) => acc + item)).toBe('hello');
});