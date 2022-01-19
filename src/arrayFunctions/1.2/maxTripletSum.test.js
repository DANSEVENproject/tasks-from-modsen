import { maxTripletSum } from './maxTripletSum';
test('return the sum of the elements from the array', () => {
    expect(maxTripletSum([2, 1, 5, 4, 3, 3])).toBe(12);
    expect(maxTripletSum([-75, 42, '64', 4, 1])).toBe(110);
    expect(maxTripletSum([, , '64', 4, 1])).toBe(69);
    expect(maxTripletSum([-1, -5, '-64'])).toBe(-70);
});