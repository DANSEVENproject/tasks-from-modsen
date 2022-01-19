import { pattern } from './pattern';
test('returns the matrix', () => {
    expect(pattern(3)).toEqual(['123', '231', '312']);
    expect(pattern(1)).toEqual(['1']);
    expect(pattern(7)).toEqual([
        '1234567',
        '2345671',
        '3456712',
        '4567123',
        '5671234',
        '6712345',
        '7123456'
    ]);
    expect(pattern(0)).toEqual([]);
});