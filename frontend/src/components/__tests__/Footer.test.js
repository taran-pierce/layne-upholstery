import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';

import Footer from '../Footer';
 
describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);

    // grab the element
    const element = screen.getByTestId('footer');
 
    // make sure its in the document
    expect(element).toBeInTheDocument();
  });

  it('should render with copyright', () => {
    const {
      getByText,
    } = render(<Footer />);
 
    // copyright text should be in footer
    expect(getByText(/Copyright/)).toBeInTheDocument();
  });

  it('should have current year', () => {
    const {
      getByText,
    } = render(<Footer />);

    // get current year
    const date = new Date;
    const year = date.getFullYear();

    // create regex for it
    const regex = new RegExp(year);
 
    // copyright text should be in footer with current year
    expect(getByText(regex)).toBeInTheDocument();
  });
});
