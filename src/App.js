import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import theme from "./themes";
import { store } from "./helpers";

const AppWrapper = styled.div.attrs(() => ({
  id: "AppWrapper"
}))`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <h2>Kinedu test!!!</h2>
        </AppWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
