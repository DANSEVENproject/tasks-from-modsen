import { stringify } from './stringify';
test('returns multiplication of numbers', () => {
    class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }
    expect(stringify(new Node(1, new Node(2, new Node(3))))).toBe("1 -> 2 -> 3 -> null");
});