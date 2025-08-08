const { add, multiply, greet } = require('./index');

describe('Math Functions', () => {
  test('adds positive numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(10, 15)).toBe(25);
  });

  test('adds negative numbers correctly', () => {
    expect(add(-1, -2)).toBe(-3);
    expect(add(-5, 10)).toBe(5);
  });

  test('multiplies numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 100)).toBe(0);
  });
});

describe('Greeting Function', () => {
  test('greets user correctly', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('GitHub')).toBe('Hello, GitHub!');
  });

  test('handles empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('handles special characters', () => {
    expect(greet('Test-User_123')).toBe('Hello, Test-User_123!');
  });
});