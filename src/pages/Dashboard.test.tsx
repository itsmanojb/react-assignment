import Dashboard from './Dashboard';
import { render, screen } from '@testing-library/react'

describe('Dashboard Component', () => {
  it('should render the dashboard page', () => {
    render(<Dashboard />);
    const dashboardElement = screen.getByTestId('dash-board');
    expect(dashboardElement).toBeInTheDocument();
    expect(dashboardElement).toHaveTextContent('Dashboard page');
  });
});
