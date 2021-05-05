import React from 'react';
import Footer from '@src/layout/Footer';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Components -> Footer', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
