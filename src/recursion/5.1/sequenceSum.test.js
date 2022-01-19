import { sequenceSum } from './sequenceSum';
test('returns multiplication of numbers', () => {
    expect(sequenceSum(1, 15, 1)).toBe(120);
    expect(sequenceSum(15, 14, 10)).toBe(0);
    expect(sequenceSum('12', 14, '2')).toBe(26);
    expect(sequenceSum(0, 0, 1)).toBe(0);
    expect(sequenceSum(0, 0, 0)).toBe(0);
});