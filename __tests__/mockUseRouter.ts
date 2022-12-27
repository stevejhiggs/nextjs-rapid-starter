import nextRouter, { NextRouter } from 'next/router';

type MockUseRouterParameters = Partial<NextRouter>;

// allow simple mocking of the router, see __tests__/components/ShowRoute.test.tsx for a usage example

// returns a fake router object
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getFakeRouter = ({
  route = '',
  pathname = '',
  query = {},
  asPath = '',
  basePath = '',
  locale = '',
  locales = [],
  defaultLocale = ''
}: MockUseRouterParameters) => {
  const actions = {
    push: jest.fn().mockResolvedValue(true),
    replace: jest.fn().mockResolvedValue(true),
    reload: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(false),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn()
    }
  };

  const fakeRouter: NextRouter = {
    route,
    pathname,
    query,
    asPath,
    basePath,
    locale,
    locales,
    defaultLocale,
    isLocaleDomain: false,
    isPreview: false,
    isReady: true,
    isFallback: false,
    ...actions
  };

  return {
    router: fakeRouter,
    actions
  };
};

// mocks the standard next useRouterCall
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const mockUseRouter = ({
  route = '',
  pathname = '',
  query = {},
  asPath = '',
  basePath = '',
  locale = '',
  locales = [],
  defaultLocale = ''
}: MockUseRouterParameters) => {
  const { router, actions } = getFakeRouter({
    route,
    pathname,
    query,
    asPath,
    basePath,
    locale,
    locales,
    defaultLocale
  });

  ((nextRouter as any).useRouter as jest.Mock) = jest.fn(() => router);

  return actions;
};

export default mockUseRouter;
