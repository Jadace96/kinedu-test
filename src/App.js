import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from './themes';
import Routes from './routes';
import { store, history } from './helpers';

const AppWrapper = styled.div.attrs(() => ({
  id: 'AppWrapper',
}))`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <AppWrapper>
            <Routes />
          </AppWrapper>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
