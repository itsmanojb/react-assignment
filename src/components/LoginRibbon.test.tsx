import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginRibbon from './LoginRibbon';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../config/ThemeConfig';

jest.mock(
  '@mui/material/Box',
  () =>
    ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
);

describe('LoginRibbon', () => {
  it('should render the LoginRibbon component', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginRibbon />
      </ThemeProvider>,
    );

    expect(screen.getByText(/Logged in as :/i)).toBeInTheDocument();
  });

  it('should display the username "User_NAME" in the ribbon', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginRibbon />
      </ThemeProvider>,
    );

    expect(screen.getByText(/User_NAME/i)).toBeInTheDocument();
  });

  it('should render the Ribbon component inside LoginRibbon', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginRibbon />
      </ThemeProvider>,
    );

    const ribbonComponent = screen.getByText(/Logged in as :/i).parentElement;
    expect(ribbonComponent).toBeInTheDocument();
  });
});
