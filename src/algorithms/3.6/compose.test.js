import { compose } from './compose';
test('returns sum', () => {
    expect(compose(((a) => +a + +a, (a) => +a + +a, (a) => +a + +a))(1)).toBe(2);
    expect(compose(((a) => a + a, (a) => a + a))([])).toEqual('');
    expect(compose(((a) => [...a].reduce((acc, item) => acc + item), (a) => a.sort((a, b) => a - b)), (a) => a.sort((a, b) => b - a))([2, 1])).toEqual([1, 2]);
});