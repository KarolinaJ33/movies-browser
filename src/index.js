import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './core/App/GlobalStyle';
import { theme } from './core/App/theme';
import { App } from './core/App/App';
import { Provider } from 'react-redux';
import store from './core/App/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
