import toMachineName from './toMachineName';
test('returns the edited string', () => {
    expect(toMachineName('    HELLO       what is  your NAme  ? ', '-')).toBe(
        'hello-what-is-your-name-?'
    );
});