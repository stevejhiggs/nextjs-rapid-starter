import * as nextRouter from 'next/router';
import { NextRouter } from 'next/router';

type MockUseRouterParameters = Partial<nextRouter.NextRouter>;

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
    prefetch: jest.fn().mockResolvedValue(),
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

  (nextRouter.useRouter as jest.Mock) = jest.fn(() => router);

  return actions;
};

export default mockUseRouter;
