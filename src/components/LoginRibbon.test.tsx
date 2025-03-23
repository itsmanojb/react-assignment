import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { theme } from '../config/ThemeConfig';
import LoginRibbon from './LoginRibbon';

jest.mock(
  '@mui/material/Box',
  () =>
    ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
);

// TODO: Update exclude tests for language-change
describe('LoginRibbon', () => {
  xit('should render the LoginRibbon component', () => {
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

  xit('should render the Ribbon component inside LoginRibbon', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginRibbon />
      </ThemeProvider>,
    );

    const ribbonComponent = screen.getByText(/Logged in as :/i).parentElement;
    expect(ribbonComponent).toBeInTheDocument();
  });
});
