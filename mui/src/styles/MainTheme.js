import { deepOrange, lightBlue, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: lightBlue.A200,
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
    fontFamily: "'Fraunces', serif, 'Barlow', sans-serif",
    fontSize: 18,
    fontWeightLight: 600,
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
});
