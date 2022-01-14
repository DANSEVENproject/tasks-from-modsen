import { biggest } from './biggest';
test('returned acc arithmetic mean', () => {
    expect(biggest([2, 1, 5, 4, 20, 66, 3, 3])).toBe('6654332201');
});