import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./styles/MainTheme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar />
      <Landing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
