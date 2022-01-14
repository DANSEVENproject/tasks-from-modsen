import { Strings } from './customUpperCase';
test('returns a formatted string', () => {
    const string = new Strings();
    expect(string.customUpperCase('Hello, world!')).toBe('HELLO, WORLD!');
});