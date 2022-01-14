import { romanToNumber } from './romanToNumber';
test('returns the converted number', () => {
    expect(romanToNumber('MC')).toBe(1100);
});