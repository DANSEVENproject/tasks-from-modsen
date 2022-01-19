import { formatCurrency } from './formatCurrency';
test('returns a formatted string', () => {
    expect(formatCurrency('1294500.342626')).toBe('1,294,500.34');
    expect(formatCurrency('1500')).toBe('1,500');
    expect(formatCurrency(100)).toBe('100');
    expect(formatCurrency('0.954123')).toBe('0.95');
});