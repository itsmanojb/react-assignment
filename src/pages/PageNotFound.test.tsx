import '@testing-library/jest-dom';
import PageNotFound from './PageNotFound';
import { render, screen } from '@testing-library/react';

describe('PageNotFound Component', () => {
  it('should display `Page Not Found`', () => {
    render(<PageNotFound />);

    const dashboardElement = screen.getByTestId('page-not-found');

    expect(dashboardElement).toBeInTheDocument();
    expect(dashboardElement).toHaveTextContent('Page Not Found');
  });
});
