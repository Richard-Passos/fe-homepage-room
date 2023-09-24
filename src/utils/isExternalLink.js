const isExternalLink = (href) =>
  href.startsWith('http') || href.startsWith('mailto');

export default isExternalLink;
