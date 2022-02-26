import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Header from '@/src/layout/Header';

afterEach(cleanup);

describe('Components -> Header', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it('Should have the right content', () => {
    render(<Header />);
    const title = screen.getByTestId('page-heading-title');
    expect(title).toHaveTextContent('Next.js starter');
  });
});
