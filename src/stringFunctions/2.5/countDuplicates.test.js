import { countDuplicates } from './countDuplicates';
test('returns duplicate letters in a string', () => {
    expect(countDuplicates('aaaaAbBcdTTeEE')).toBe(4);
});