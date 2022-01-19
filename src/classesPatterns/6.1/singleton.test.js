import { Singleton } from './singleton';
test('returns a value', () => {
    const o1 = new Singleton();
    const o2 = new Singleton();
    const o3 = new Singleton();
    o1.name = 'Singleton';

    expect(o1 === o2).toBe(true);
    expect(o1 === o3).toBe(true);
    expect(o2.name).toBe('Singleton');
    expect(o2.name === o3.name).toBe(true);
});