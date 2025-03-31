import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#F7931A", // Bitcoin orange
    },
    secondary: {
      main: "#0EA5E9", // Sky blue
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          "&:hover": { color: "#F7931A" },
        },
      },
    },
  },
});

export default theme;
