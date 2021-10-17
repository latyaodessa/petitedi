import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import App from './app/app';
import { CssBaseline } from '@mui/material';
import theme from './app/core/theme';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
