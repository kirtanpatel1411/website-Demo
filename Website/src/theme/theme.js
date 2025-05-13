import { createTheme } from "@mui/material/styles";
import { MuiButton } from "./ThemeComponent";
import { MuiTypography } from "./ThemeComponent";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9500",
      light: "#FFF1DC",
    },
    background: {
      default: "#F7F7F8",
      main: "#FFF",
    },

    fontcolor: {
      main: "#262626",
      light: "#59595A",
      dark: "#191919",
    },
  },
  components: {
    MuiButton,
    MuiTypography,
  },
});

export default theme;
