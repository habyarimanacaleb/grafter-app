import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#388E3C", // Nature-like green color
    },
    secondary: {
      main: "#FFB300", // Safari yellow
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#388E3C",
    },
    body1: {
      fontSize: "1.1rem",
      color: "#555",
    },
  },
});

export default theme;
