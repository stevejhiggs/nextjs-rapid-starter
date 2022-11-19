import React from 'react';
import { cleanup, render, screen, within } from '@testing-library/react';
import Page, { getServerSideProps, PageProperties } from '@/pages/serverRendered';
import { assertHasProps } from '../assertions';
import { gsspContext } from '../context';

afterEach(cleanup);

describe('Pages -> /serverRendered', () => {
  it('Should have the right content', async () => {
    // todo: this type casting should not be needed
    const response = await getServerSideProps(gsspContext());
    assertHasProps(['props'], response);
    const props = response.props as PageProperties;

    render(<Page {...props} />);
    const serverData = screen.getByTestId('server-data');
    const peas = await within(serverData).findByText('mushy peas');
    expect(peas).toBeVisible();
  });
});
