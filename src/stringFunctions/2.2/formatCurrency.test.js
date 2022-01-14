import { formatCurrency } from './formatCurrency';
test('returns a formatted string', () => {
    expect(formatCurrency('1294500.342626')).toBe('1,294,500.34');
});