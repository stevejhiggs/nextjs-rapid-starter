import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import Counter from '@/src/Counter';

afterEach(cleanup);

describe('Components -> Counter', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });

  it('Should initially have a value of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('message')).toHaveTextContent('You clicked 0 times');
  });

  it('Should enable the button', () => {
    render(<Counter />);
    expect(screen.getByTestId('increment')).not.toHaveAttribute('disabled');
  });

  it('Should increment the count by 1 when the button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('message')).toHaveTextContent('You clicked 1 times');
  });
});
