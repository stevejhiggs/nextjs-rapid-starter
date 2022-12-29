import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Nav from '@/components/layout/Nav';

afterEach(cleanup);

describe('Components -> Nav', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
