import { countDuplicates } from './countDuplicates';
test('returns duplicate letters in a string', () => {
    expect(countDuplicates('aaaaAbBcdTTeEE')).toBe(4);
    expect(countDuplicates('5554421')).toBe(2);
    expect(countDuplicates('Im so lucky')).toBe(1);
    expect(countDuplicates('')).toBe(0);
});