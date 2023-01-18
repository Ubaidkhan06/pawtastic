import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import theme from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signupsecond from "./pages/Signupsecond";
import Signupthird from "./pages/Signupthird";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupsecond" element={<Signupsecond />} />
        <Route path="/signupthird" element={<Signupthird />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
