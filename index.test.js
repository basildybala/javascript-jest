// reverse.test.js
const reverseStr = require('./index');

describe('reverseStr', () => {
  test('should reverse a normal string', () => {
    expect(reverseStr('abc')).toBe('cba');
  });

  test('should return an empty string when input is empty', () => {
    expect(reverseStr('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(reverseStr('x')).toBe('x');
  });

  test('should handle strings with spaces', () => {
    expect(reverseStr('a b c')).toBe('c b a');
  });

  test('should handle strings with numbers and symbols', () => {
    expect(reverseStr('123!')).toBe('!321');
  });
});
