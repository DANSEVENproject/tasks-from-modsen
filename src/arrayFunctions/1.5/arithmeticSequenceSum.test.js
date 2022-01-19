import { arithmeticSequenceSum } from './arithmeticSequenceSum';
test('returns calculations with the formula', () => {
    expect(arithmeticSequenceSum(10, 4, 3)).toEqual(42);
    expect(arithmeticSequenceSum(2, 3, 5)).toEqual(40);
    expect(arithmeticSequenceSum('1', 1, 1)).toEqual(1);
    expect(arithmeticSequenceSum(1, 1, 0)).toEqual(0);
});