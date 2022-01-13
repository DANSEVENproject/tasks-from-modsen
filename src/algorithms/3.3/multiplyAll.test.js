import multiplyAll from './multiplyAll';
test('returned arr multiplate four', () => {
    expect(multiplyAll([2, 4, 6])(4)).toEqual([8, 16, 24]);
});