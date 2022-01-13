import arithmeticSequenceSum from './arithmeticSequenceSum';
test('returns calculations with the formula', () => {
    expect(arithmeticSequenceSum(10, 4, 3)).toEqual(42);
});