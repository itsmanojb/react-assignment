import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { theme } from '../config/ThemeConfig';
import LoginRibbon from './LoginRibbon';
import { LanguageProvider } from '../contexts/LanguageContext';
import { mockI18n } from '../test-utils/mocki18n';

jest.mock(
  '@mui/material/Box',
  () =>
    ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
);

mockI18n({
  text__logged_in_user: 'Logged in as :',
});

describe('LoginRibbon', () => {
  it('should render the LoginRibbon component', () => {
    render(
      <ThemeProvider theme={theme}>
         <LanguageProvider>
            <LoginRibbon />
         </LanguageProvider>
      </ThemeProvider>,
    );

    expect(screen.getByText(/User_NAME/i)).toBeInTheDocument();
  });

  it('should display the username "User_NAME" in the ribbon', () => {
    render(
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <LoginRibbon />
        </LanguageProvider>
      </ThemeProvider>,
    );

    expect(screen.getByText(/User_NAME/i)).toBeInTheDocument();
  });
});
