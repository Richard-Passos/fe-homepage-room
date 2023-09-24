import isExternalLink from './isExternalLink';

describe('isExternalLink', () => {
  it('should return true if string starts with "http" or "mailto"', () => {
    const res1 = isExternalLink('https://placeholder.com'),
      res2 = isExternalLink('mailto:placeholder@example.com'),
      res3 = isExternalLink('/placeholder');

    expect(res1).toBe(true);
    expect(res2).toBe(true);
    expect(res3).toBe(false);
  });
});
