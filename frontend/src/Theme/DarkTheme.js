const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Ensures dark mode is enabled
    primary: {
      main: "#e91e63", // Pink
    },
    secondary: {
      main: "#5A20CB", // Purple
    },
    background: {
      default: "#0D0D0D", // Background color
      paper: "#0D0D0D",   // Card or Paper elements
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#b0bec5", // Light grey text
    },
  },
});