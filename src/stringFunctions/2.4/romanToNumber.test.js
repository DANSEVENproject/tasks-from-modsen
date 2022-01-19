import { romanToNumber } from './romanToNumber';
test('returns the converted number', () => {
    expect(romanToNumber('MC')).toBe(1100);
    expect(romanToNumber('IV')).toBe(4);
    expect(romanToNumber('XIII')).toBe(13);
    expect(romanToNumber('')).toBe(0);
});