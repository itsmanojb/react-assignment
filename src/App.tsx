import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/ThemeConfig';
import { AppContextProvider } from './contexts/AppContext';
import AppRouting from './AppRouting';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <AppRouting />
        </AppContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
