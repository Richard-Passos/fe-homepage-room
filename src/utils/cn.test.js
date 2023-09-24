import cn from './cn';

describe('cn', () => {
  it('should return 1 string', () => {
    const res = cn(
      'a',
      'b',
      'c',
      { d: true },
      { e: false },
      ['f'],
      ['g'],
      [{ i: true }],
      [['h']],
    );

    expect(typeof res === 'string').toBe(true);
  });

  it('should return 1 string with unique tailwind class', () => {
    const EXPECTED = 'bg-red-500 text-red-500';

    const res = cn(
      'bg-gray-500 text-gray-500',
      'bg-blue-500 text-blue-500',
      'bg-orange-500',
      'text-orange-500',
      { 'bg-green-500 bg-green-500': true },
      { 'bg-yellow-500 bg-yellow-500': false },
      ['bg-pink-500 text-pink-500'],
      [{ 'bg-purple-500 text-purple-500': true }],
      [[EXPECTED]],
    );

    expect(res).toBe(EXPECTED);
  });
});
