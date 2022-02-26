import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Layout from '@/src/layout/Layout';

afterEach(cleanup);

describe('Components -> Layout', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
