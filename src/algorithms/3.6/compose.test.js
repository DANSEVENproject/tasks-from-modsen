import { compose } from './compose';
test('returns sum', () => {
    expect(compose((a) => a + a, (a) => a + a, (a) => a + a)(1)).toBe(8);
});