import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';

import Header from '../Header';
 
describe('Header', () => {
  it('should render', () => {
    render(<Header />);

    // grab the element
    const element = screen.getByTestId('header');
 
    // make sure its in the document
    expect(element).toBeInTheDocument();
  });

  it('should render with Logo', () => {
    const {
      getByText,
    } = render(<Header />);
 
    // Logo should be in header
    expect(getByText(/Layne Upholstery/)).toBeInTheDocument();
  });

  it('should container navigation', () => {
    const {
      getByText,
      getByRole,
    } = render(<Header />);
 
    // copyright text should be in footer with current year
    expect(getByRole('navigation')).toBeInTheDocument();
  });
});
