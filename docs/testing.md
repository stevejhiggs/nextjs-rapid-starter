# Testing

All tests are powered by [jest](https://jestjs.io/) and currently live under the top-level "tests" directory and the subdirectories mirror the structure of the rest of the app. Running the tests can be done by running `yarn test`. This will run jest in "watch" mode and run all the tests. In watch mode jest will automatically re-run tests that are affected by any file changes you make.

There are some keyboard commands that are available in watch mode and these will be printed out for you after the test run.

## Snapshot testing

Snapshot testing is a mechanism of rapidly generating tests by comparing the output against an expected snapshot of a previous run. While this allows tests to be created very quickly it has the disadvantage of being extremely brittle.

Jest can help with this process by generating and keeping snapshots up to date. You can regenerate snapshots by either pressing `u` when running in watch mode or running `yarn updateSnapshots`. You can then look at the new snapshot files to determine what has changed.

Snapshot testing should only be one tool in your testing arsenal.

## Debugging tests

If you have the vscode jest extension installed any failing tests will show a handy "debug" link above them. This will let you debug into any failing tests.
