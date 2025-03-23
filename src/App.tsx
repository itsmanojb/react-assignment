import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { AppContextProvider } from './contexts/AppContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { theme } from './config/ThemeConfig';
import AppRouting from './AppRouting';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <AppContextProvider>
            <AppRouting />
          </AppContextProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
