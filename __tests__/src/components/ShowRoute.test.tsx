import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import ShowRoute from '@/components/ShowRoute';
import mockUseRouter from '@/__tests__/mockUseRouter';

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe('Components -> ShowRoute', () => {
  it('should show router information', () => {
    mockUseRouter({
      asPath: '/showRouter/blahblahMadeUpValue',
      pathname: '/showRouter/[dynamicRouteParam]',
      query: { dynamicRouteParam: 'blahblahMadeUpValue' }
    });
    render(<ShowRoute />);

    expect(screen.getByTestId('route')).toHaveTextContent('Route: /showRouter/blahblahMadeUpValue');
    expect(screen.getByTestId('pathName')).toHaveTextContent('Path name: /showRouter/[dynamicRouteParam]');
    expect(screen.getByTestId('query')).toHaveTextContent('Query: { "dynamicRouteParam": "blahblahMadeUpValue" }');
  });
});
