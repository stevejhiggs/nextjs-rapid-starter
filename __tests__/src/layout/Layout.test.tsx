import React from 'react';
import Layout from '@src/layout/Layout';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Components -> Layout', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
