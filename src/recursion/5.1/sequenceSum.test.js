import { sequenceSum } from './sequenceSum';
test('returns multiplication of numbers', () => {
    expect(sequenceSum(1, 15, 1)).toBe(120);
    expect(sequenceSum(15, 14, 10)).toBe(0);
});