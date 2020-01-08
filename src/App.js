import React from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./themes";

const AppWrapper = styled.div.attrs(() => ({
  id: "AppWrapper"
}))`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <h2>Kinedu test!!!</h2>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
