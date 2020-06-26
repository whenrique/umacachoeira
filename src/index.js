import '@babel/polyfill/noConflict'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './utils/global-styles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
