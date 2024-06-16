import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

import 'csshake';
import 'taipei-sans-tc';
import 'taipei-sans-tc/dist/Light/TaipeiSansTCBeta-Light.css';
import 'taipei-sans-tc/dist/Bold/TaipeiSansTCBeta-Bold.css';

import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
