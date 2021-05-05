# Pages

Pages in next are all created under the `/pages` directory. This directory contains both normal pages and api endpoints (api is accessible via `/api`).

## File based routing

Pages and api endpoints both use next's [file based routing](https://nextjs.org/docs/routing/introduction) feature and as such the path of the file corresponds to the path of the endpoint. E.g the file at `pages/bob/fish.tsx` serves the page `/bob/fish`.

These paths can also contain parameters by enclosing a file or folder name in `[]` e.g the file at `/pages/bob/[fishName]/bait` will get served on a url of `/pages/bob/perch/bait` and the value `perch` will be put in the query variable `fishName`.

It is important to note that next.js will try to create routes to every file in this directory and as such only files that are routes should be added to this directory or any of its sub-directories.

## Rendering

There are a couple of different ways a page can be rendered in next.js. See [here](https://nextjs.org/docs/basic-features/pages) for more information.
