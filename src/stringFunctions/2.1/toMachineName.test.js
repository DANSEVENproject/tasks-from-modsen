import { toMachineName } from './toMachineName';
test('returns the edited string', () => {
    expect(toMachineName('    HELLO       what is  your NAme  ? ', '-')).toBe(
        'hello-what-is-your-name'
    );
    expect(toMachineName('Почему text Tak0u       РАзный?', 'ф')).toBe(
        'почемуфtextфtak0uфразный'
    );
    expect(toMachineName('Почему text Tak0u       РАзный?', '')).toBe(
        'почемуtexttak0uразный'
    );
});