import { pattern } from './pattern';
test('returns the matrix', () => {
    expect(pattern(3)).toEqual(['123', '231', '312']);
});