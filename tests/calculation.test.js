import calculation from '../utils/calculation';

describe('calculation', () => {
  test('calculation', () => {
    expect(calculation(3, 2000, 20000)).toBe('30.00');
  });

  test('calculation', () => {
    expect(calculation(2, 2000, 20000)).toBe('20.00');
  });
  test('calculation', () => {
    expect(calculation(2, 2000, 10000)).toBe('10.00');
  });
});
