import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { theme } from '../config/ThemeConfig';
import AppNavBar from './AppNavbar';

jest.mock('@mui/icons-material/Menu', () => () => <div>MenuIcon</div>);
jest.mock('@mui/icons-material/Notifications', () => () => (
  <div>NotificationsIcon</div>
));
jest.mock('@mui/icons-material/Settings', () => () => <div>SettingsIcon</div>);
jest.mock('@mui/icons-material/Search', () => () => <div>SearchIcon</div>);

describe('AppNavBar', () => {
  it('renders the AppNavBar correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <AppNavBar />
      </ThemeProvider>,
    );

    expect(screen.getByText('MenuIcon')).toBeInTheDocument();
    expect(screen.getByText('NotificationsIcon')).toBeInTheDocument();
    expect(screen.getByText('SettingsIcon')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        'Search for name, numbers, accounts or free text',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('17')).toBeInTheDocument();
  });

  it('should contain a search input with the correct placeholder', () => {
    render(
      <ThemeProvider theme={theme}>
        <AppNavBar />
      </ThemeProvider>,
    );

    const searchInput = screen.getByPlaceholderText(
      'Search for name, numbers, accounts or free text',
    );
    expect(searchInput).toBeInTheDocument();
  });

  it('should display notifications badge with the number "17"', () => {
    render(
      <ThemeProvider theme={theme}>
        <AppNavBar />
      </ThemeProvider>,
    );

    const badgeContent = screen.getByText('17');
    expect(badgeContent).toBeInTheDocument();
  });
});
