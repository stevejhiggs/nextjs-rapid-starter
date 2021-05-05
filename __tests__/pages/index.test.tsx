import React from 'react';
import Index from '@pages/index';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(cleanup);

describe('Pages -> /', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });

  it('Should have the right content', () => {
    render(<Index />);
    const titles = screen.getAllByRole('heading');
    expect(titles[0]).toHaveTextContent('Homepage');
  });
});
