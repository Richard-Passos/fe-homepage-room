import { render, screen } from '@testing-library/react';

import Header from './Root';

const QUERY_OBJ = { role: 'banner', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Header />', () => {
  it('should render properly', () => {
    render(<Header />);

    const header = screen.getByRole(...QUERY);

    expect(header).toBeInTheDocument();
  });

  it('should contain an aside', () => {
    render(<Header />);

    const header = screen.getByRole(...QUERY),
      aside = header.querySelector('aside');

    expect(aside).toBeInTheDocument();
  });

  it('should contain a link to "/"', () => {
    render(<Header />);

    const header = screen.getByRole(...QUERY),
      link = header.querySelector('a[href="/"]');

    expect(link).toBeInTheDocument();
  });

  it('should contain a navigation', () => {
    render(<Header />);

    const header = screen.getByRole(...QUERY),
      navigation = header.querySelector('nav');

    expect(navigation).toBeInTheDocument();
  });
});
