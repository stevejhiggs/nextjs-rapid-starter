import { IncomingMessage } from 'http';
import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';

// next could render a page server-side or client-side
// when rendering server side we dont have a host and fetch doesn't know what host to talk to
// this code will use the current domain client side and attempt to retrieve something sensible server side.
// If it can't find anything valid it'll fallback on the localserver address

const localServer = 'http://localhost:3000';

const nextFetch = (input: RequestInfo, init?: RequestInit, request?: IncomingMessage): Promise<Response> => {
  let currentUrl = input.toString();

  if (!currentUrl.toUpperCase().startsWith('HTTP')) {
    const { origin } = absoluteUrl(request, localServer);
    currentUrl = `${origin}${currentUrl}`;
  }

  return fetch(currentUrl, init);
};

export default nextFetch;
