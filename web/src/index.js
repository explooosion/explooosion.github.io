import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import './index.scss';
import './i18n';
import App from './App';

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./scss/_index.scss');

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
  html,
  body {
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #fff;
    padding: 50px;
    font-size: 14px;
    font-family: $global-font;
    font-weight: 400;
    color: #595959;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 0;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />,
  </ThemeProvider>,
  document.getElementById('root')
);
