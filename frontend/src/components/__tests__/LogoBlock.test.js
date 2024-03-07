import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';

import LogoBlock from '../LogoBlock';
 
describe('LogoBlock', () => {
  it('should render', () => {
    const { getByTestId } = render(<LogoBlock />);
 
    // make sure its in the document
    expect(getByTestId('logo-block')).toBeInTheDocument();
  });

  it('should render with the text', () => {
    const {
      getByText,
    } = render(<LogoBlock />);
 
    // Text should be there
    expect(getByText(/Layne Upholstery/)).toBeInTheDocument();
  });

  it('should render with the image', () => {
    const {
      getByTestId,
    } = render(<LogoBlock />);
 
    // make sure the image is there
    expect(getByTestId('logo-image')).toBeInTheDocument();
  });
});
