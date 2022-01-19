import { Strings } from './customUpperCase';
test('returns a formatted string', () => {
    const string = new Strings();
    expect(string.customUpperCase('Hello, world!')).toBe('HELLO, WORLD!');
    expect(string.customUpperCase('`5523/ ')).toBe('`5523/ ');
    expect(string.customUpperCase('I will finish this course')).toBe('I WILL FINISH THIS COURSE');
    expect(string.customUpperCase('oMg wTF')).toBe('OMG WTF');
});