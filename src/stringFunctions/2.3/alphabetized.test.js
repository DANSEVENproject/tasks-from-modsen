import { alphabetized } from './alphabetized';
test('returns a formatted string', () => {
    expect(alphabetized('The!!!321 Holy Bible.')).toBe('BbeehHilloTy');
});