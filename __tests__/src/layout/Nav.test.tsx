import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Nav from '@/src/layout/Nav';

afterEach(cleanup);

describe('Components -> Nav', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
