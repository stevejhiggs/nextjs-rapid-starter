import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CallApi from '@/components/CallApi';

// We are testing a component that makes network calls so we need to be able to mock/control those.
// Rather than getting ourselves in a mess mocking the networking library we are going to use a service worker
// to intercept and rewrite all network calls

// setup a service worker that will intercept all network traffic
const server = setupServer();

// make sure we reset the state of the service worker between calls
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe('Components -> CallApi', () => {
  it('Should initially have a blank value', () => {
    render(<CallApi />);
    expect(screen.getByTestId('message')).toHaveTextContent('Api result:');
  });

  describe('with a 200 response from the api', () => {
    it('Should call the api and show the result when the button is clicked', async () => {
      // mock our request
      server.use(
        rest.get('/api/number/:id/returnId', (request, response, context) => {
          return response(context.json({ greeting: 'hello there' }));
        })
      );

      render(<CallApi />);
      fireEvent.click(screen.getByTestId('loadApi'));
      await waitFor(() => expect(screen.getByTestId('message')).toHaveTextContent('Api result: {"greeting":"hello there"}'));
    });
  });

  describe('with a 500 response from the api', () => {
    it('Should call the api and show the result when the button is clicked', async () => {
      server.use(
        rest.get('/api/number/:id/returnId', (request, response, context) => {
          return response(context.status(500), context.json({ message: 'Internal Server Error' }));
        })
      );

      render(<CallApi />);
      fireEvent.click(screen.getByTestId('loadApi'));
      await waitFor(() => expect(screen.getByTestId('error')).toHaveTextContent('something went wrong calling the api'));
    });
  });
});
