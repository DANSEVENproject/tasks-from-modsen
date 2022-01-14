import { spread } from './spread';
test('returns sum', () => {
    expect(spread((...a) => [...a].reduce((acc, item) => acc + item), [1, true, false, 0])).toBe(2);
});