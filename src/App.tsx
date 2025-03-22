import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/ThemeConfig";
import { UIContextProvider } from "./contexts/UIContext";
import AppRouting from "./AppRouting";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UIContextProvider>
          <AppRouting />
        </UIContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
