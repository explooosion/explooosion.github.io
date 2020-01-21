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
    font-size: 14px;
    font-family: $global-font;
    font-weight: 400;
    color: $dark;
    background-color: #fff;
    z-index: 0;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    text-align: justify;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />,
  </ThemeProvider>,
  document.getElementById('root')
);
