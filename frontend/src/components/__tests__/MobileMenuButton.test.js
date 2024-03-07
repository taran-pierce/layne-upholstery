import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';

import MobileMenuButton from '../MobileMenuButton';
 
describe('MobileMenuButton', () => {
  it('should render', () => {
    const { getByTestId } = render(<MobileMenuButton />);
 
    // make sure its in the document
    expect(getByTestId('mobile-menu-button')).toBeInTheDocument();
  });

  it('should render with the image', () => {
    const {
      getByTestId,
    } = render(<MobileMenuButton />);
 
    // logo should be there
    expect(getByTestId('logo')).toBeInTheDocument();
  });
});
