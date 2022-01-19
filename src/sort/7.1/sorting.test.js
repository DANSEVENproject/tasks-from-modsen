import { sorting } from './sorting';
test('returns sorted object', () => {
    expect(sorting([
        { 'a': 3, 'b': 12, 'c': 50 },
        { 'a': 2, 'b': 2, 'c': 550 },
        { 'a': 4, 'b': 40, 'c': 50 },
        { 'a': 1, 'b': 3, 'c': 150 }
    ], 'c')).toEqual([
        { 'a': 2, 'b': 2, 'c': 550 },
        { 'a': 1, 'b': 3, 'c': 150 },
        { 'a': 3, 'b': 12, 'c': 50 },
        { 'a': 4, 'b': 40, 'c': 50 }
    ]);
    expect(sorting([
        { 'a': 3, },
        { 'a': 2, },
    ], 'a')).toEqual([
        { 'a': 3, },
        { 'a': 2, },
    ]);
    expect(sorting([
        {},
        {},
    ], '')).toEqual([
        {},
        {}
    ]);
    expect(sorting([
        { 'a': 3, 'b': 12, 'c': 50 },
        { 'a': 2, 'b': 2, 'c': 550 },
        { 'a': 4, 'b': 40, 'c': 50 },
        { 'a': 1, 'b': 3, 'c': 150 }
    ], 'f')).toEqual([
        { 'a': 3, 'b': 12, 'c': 50 },
        { 'a': 2, 'b': 2, 'c': 550 },
        { 'a': 4, 'b': 40, 'c': 50 },
        { 'a': 1, 'b': 3, 'c': 150 }
    ]);
});