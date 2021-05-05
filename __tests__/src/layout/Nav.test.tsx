import React from 'react';
import Nav from '@src/layout/Nav';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Components -> Nav', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
