import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled, { ThemeProvider } from 'styled-components';

import theme from './themes';
import Routes from './routes';
import { store, history } from './helpers';
import Loader, { bindLoaderContainer } from './containers/Loader';

const AppWrapper = styled.div.attrs(() => ({
  id: 'AppWrapper',
}))`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function AppWrapperComponent(props) {
  return (
    <AppWrapper>
      <Routes configProps={props} />
    </AppWrapper>
  );
}

/* This is the place to bind all global data */
const AppConected = bindLoaderContainer(AppWrapperComponent);

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Loader />
            <AppConected />
          </Router>
        </ThemeProvider>
      </Provider>
      <ToastContainer draggable position="top-right" />
    </>
  );
}
export default App;
