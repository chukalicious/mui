import { deepOrange, lightBlue, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#53ccfd",
      light: lightBlue.A100,
      dark: lightBlue.A700,
    },
    secondary: {
      main: yellow[500],
      light: yellow[200],
      dark: "#c8b900",
    },
    warning: {
      main: deepOrange[300],
      light: deepOrange[100],
      dark: deepOrange.A400,
    },
  },
  typography: {
    fontSize: 18,
    fontWeightRegular: 600,
    h1: {
      fontFamily: "Fraunces",
      fontSize: "29rem",
      fontWeight: 80,
    },
    body1: {
      fontFamily: "Barlow",
      fontSize: 18,
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Fraunces",
      fontWeight: 700,
      fontSize: 26,
    },
    h3: {
      fontFamily: "Fraunces",
    },
    fontFamily: "Barlow",
  },
});
