import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Page from '@/pages/index';

afterEach(cleanup);

describe('Pages -> /', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it('Should have the right content', () => {
    render(<Page />);
    const titles = screen.getAllByRole('heading');
    expect(titles[0]).toHaveTextContent('Homepage');
  });
});
