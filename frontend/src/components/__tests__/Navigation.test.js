import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';

import Navigation, { mainLinks } from '../Navigation';

import Provider from '../Provider';
 
describe('Navigation', () => {
  it('should render', () => {
    const { getByRole } = render(<Navigation />);
 
    // make sure its in the document
    expect(getByRole('navigation')).toBeInTheDocument();
  });

  it('should render with the image', () => {
    const {
      getByTestId,
    } = render(<Navigation />);
 
    // Should contain the menu button
    expect(getByTestId('mobile-menu-button')).toBeInTheDocument();
  });

  it('should render have proper navigation links', () => {
    const {
      getByText,
    } = render(<Navigation />);

    // make sure all the links are present
    mainLinks.forEach((link) => {
      expect(getByText(link.name)).toBeInTheDocument();
    });
  });
});
