import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@emotion/react"
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { myTheme } from './theme';







const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

