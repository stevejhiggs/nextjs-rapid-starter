# next js rapid starter

Contains a skeleton for rapidly standing up sites in a docker container running [next.js](https://nextjs.org/).

## Features

- rendering

  - client side rendering with react
  - server side rendering
  - build time static generation
  - auto tree shaking and building
  - auto polyfilling only in required browsers

- [routing](docs/pages.md)

  - built in [file based routing](https://nextjs.org/docs/routing/introduction) with param support

- [api](docs/api.md)

  - built in [api support](https://nextjs.org/docs/api-routes/introduction)

- [styling](docs/styling.md)

  - [Chakra ui](https://chakra-ui.com/)
    tech theme built in
  - Built in support for cssmodules/sass/scss

- devtools

  - Built with [typescript](https://www.typescriptlang.org/)
  - Full hot-reloading support. Just save your changes to see them reflected on the site.
  - [Linting](docs/linting.md) support with eslint + prettier
  - lint on git commit via husky
  - vscode debugger preconfigured for server and client-side
  - relevent vscode extensions auto-recommended
  - built in bundle size analysis

- security

  - out of the box security headers. E.g csp
  - license check on Pull Request
  - checks for critical security issues on Pull Request

- [logging](docs/logging.md)

  - pre-configured to output json structured logs
  - sends client-side logs to the server
  - configurable log level via env vars

- building

  - docker build already setup
  - Optional cloudbuild steps for a Pull request already configured
  - Optional export mode that allows the site to be simply hosted from a directory in bucket

- [testing](docs/testing.md)

  - testing already setup for
    - pages
    - components
    - arbitrary typescript
    - api routes
  - snapshot test support
  - tests ran on Pull Request
  - test coverage reported
  - tests support watch mode

- Internationalisation support

  - built on [next-i18next](https://github.com/isaachinman/next-i18next)
  - per language routing
  - browser language awareness
  - supports multiple translation files per language
  - language can be selected based on [domain or path](https://nextjs.org/docs/advanced-features/i18n-routing)

  See the [docs](docs) directory for more information

## Local development

### Requirements

- [Node.js 16.x or higher](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Recommended tools

- [visual studio code](https://code.visualstudio.com/)

  - editor config extension
  - jest extension
  - debugger for chrome extension
  - eslint extension
  - prettier extension

- If you are running in windows then use the [new terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701)

### Running locally

You can then run the app by:

- running `yarn` to install the packages
- running `yarn start` to start the app in local development mode
- visiting http://localhost:3000

## Available commands

- `yarn start` - start the app running locally in dev mode
- `yarn test` - run the tests
- `yarn test:watch` - run the tests in watch mode
- `yarn test:ci` - run the tests for ci/cd + generate a coverage report
- `yarn lint` - lint the codebase, applying fixes where possible
- `yarn lint:ci` - lint the codebase, erroring out if code does not meet requirements
- `yarn analyze` - show what takes up the space in the bundle
- `yarn security:licenses` - show what licenses are in use, failing on GPL
- `yarn security:packages` - show any security issues with packages, failing on critical issues
- `yarn build` - build the app ready for production
- `yarn start:production` - run the built package

## How do I get started making changes?

There's a lot of code here, it can be a little intimidating. But to start with just concentrate on making your pages in `/pages` and creating your components in `/components`. If you are just building a normal react app you can build everything just using those areas.

### Clearing out the example code

- You can delete all the files in `/pages` apart from `_app.ts` and `document.ts`.
- You can delete all the components (\*.tsx) in `/src` except for the bits under the `/src/layout` directory. You can edit the contents of the `/src/layout` directory however you like but just bear in mind that right now the `Layout.tsx` file references the other layout components.
- If you dont need a local api you can delete the entire `/pages/api` and `src/api` folders.

## Documentation

The [docs](docs) folder contains more information about the project

- [code structure](docs/codeStructure.md) - covers the general layout of the code
- [debugging](docs/debugging.md) - how to debug the client and server side code
- [deploying](docs/deploying.md) - how to deploy to dev/qa/stage and production
- [logging](docs/logging.md) - configuring log levels
- [testing](docs/testing.md) - how to run tests
- [styling](docs/styling.md) - styling using chakra ui + jss
- [api](docs/api.md) - Details about the api endpoints.
- [linting](docs/linting.md) - When the linter runs.
- [monitoring](docs/monitoring.md) - How to check the health of the system, where to look if something breaks

## How do I add "feature X"

This repo is a base to build on but fundamentally it is just a next.js project. Next.js iself has great examples of how to add various features available [here](https://github.com/vercel/next.js/tree/canary/examples) and these will work just the same in this project.

## Future enhancements

- Testing the running site end-to-end using [playwright](https://github.com/microsoft/playwright)
- Use the [next image component](https://nextjs.org/docs/basic-features/image-optimization) to automatically resize images at build time and serve them using the most efficient mechanism
- An example of use getStaticPaths to generate multiple pages at build time
