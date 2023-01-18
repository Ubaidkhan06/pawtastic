import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider } from '@mui/material/styles'
import  useTheme  from '@mui/material/styles/useTheme'
import { backgroundColors } from "./styles/theme/backgrounds";
import HomePage from "./pages/HomePage";
import theme from "./styles/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
