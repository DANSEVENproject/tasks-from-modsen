import { biggest } from './biggest';
test('returned acc arithmetic mean', () => {
    expect(biggest([2, 1, 5, 4, 20, 66, 3, 3])).toBe('6654332201');
    expect(biggest([1, 2, 3, 4, 5, 40, 33, 19, 10])).toBe('5440333219110');
    expect(biggest([56, 555, '6'])).toBe('656555');
    expect(biggest([])).toBe('');
});