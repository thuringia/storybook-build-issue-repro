import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@constants/theme";

import Button from "@atoms/button";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <span>GATSBY!!</span>
      <Button>BUTTON</Button>
    </div>
  </ThemeProvider>
);

export default App;
