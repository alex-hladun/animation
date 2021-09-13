import { createTheme } from "@material-ui/core";
import colorTheme from "./theme";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto"
    ].join(",")
  }
});

export default theme;
