import { replaceWithAlphPositions } from './replaceWithAlphPositions';
test('returns the letter numbers in charCodeAt', () => {
    expect(replaceWithAlphPositions('This 312 "clock.')).toBe(
        '20 8 9 19 3 12 15 3 11'
    );
    expect(replaceWithAlphPositions('')).toBe('');
    expect(replaceWithAlphPositions('01')).toBe('');
});