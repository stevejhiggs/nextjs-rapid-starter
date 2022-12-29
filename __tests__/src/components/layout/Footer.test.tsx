import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

afterEach(cleanup);

describe('Components -> Footer', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
