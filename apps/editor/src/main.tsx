import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import App from './app/app';
import { CssBaseline } from '@mui/material';
import theme from './app/core/theme';
import { I18nextProvider } from 'react-i18next';
import i18 from './app/core/i18';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
