import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#232931",
    },
    secondary: {
      main: "#393E46",
    },
    error: {
      main: "#FF2B2B",
    },
    warning: {
      main: "#FAFF00",
    },
    success: {
      main: "#48FFC8",
    },
    info: {
      main: "#ab47bc",
    },
  },
});
export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#BFFCD0",
    },
    error: {
      main: "#FF2B2B",
    },
    warning: {
      main: "#FFA6A6",
    },
    success: {
      main: "#6BA6FF",
    },
    info: {
      main: "#FEFFC0   ",
    },
    background: {
      default: "#e1e1e1",
    },
  },
});
