import { render, screen } from '@testing-library/react';
import AppNavBar from './AppNavbar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/ThemeConfig';
import '@testing-library/jest-dom';

// Mock MUI icons used in the component
jest.mock('@mui/icons-material/Menu', () => () => <div>MenuIcon</div>);
jest.mock('@mui/icons-material/Notifications', () => () => <div>NotificationsIcon</div>);
jest.mock('@mui/icons-material/Settings', () => () => <div>SettingsIcon</div>);
jest.mock('@mui/icons-material/Search', () => () => <div>SearchIcon</div>);

describe('AppNavBar', () => {
  it('renders the AppNavBar correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <AppNavBar />
      </ThemeProvider>
    );

    // Check if the MenuIcon is rendered
    expect(screen.getByText('MenuIcon')).toBeInTheDocument();

    // Check if the NotificationsIcon is rendered
    expect(screen.getByText('NotificationsIcon')).toBeInTheDocument();

    // Check if the SettingsIcon is rendered
    expect(screen.getByText('SettingsIcon')).toBeInTheDocument();

    // Check if the search input is rendered
    expect(screen.getByPlaceholderText('Search for name, numbers, accounts or free text')).toBeInTheDocument();

    // Check if the Badge with the number of notifications is rendered
    expect(screen.getByText('17')).toBeInTheDocument();
  });

  it('should contain a search input with the correct placeholder', () => {
    render(
      <ThemeProvider theme={theme}>
        <AppNavBar />
      </ThemeProvider>
    );

    const searchInput = screen.getByPlaceholderText('Search for name, numbers, accounts or free text');
    expect(searchInput).toBeInTheDocument();
  });

  it('should display notifications badge with the number "17"', () => {
    render(
      <ThemeProvider theme={theme}>
        <AppNavBar />
      </ThemeProvider>
    );

    const badgeContent = screen.getByText('17');
    expect(badgeContent).toBeInTheDocument();
  });
});
