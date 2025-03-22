import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/ThemeConfig';
import AppRouting from './AppRouting';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouting />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
