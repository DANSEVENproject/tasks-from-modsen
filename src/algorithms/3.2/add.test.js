import add from './add';
test('returns the addition of numbers', () => {
    const addOne = add(98);
    expect(addOne(6)).toBe(104);
});