import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobaStyle from '../styles/global';
import theme from '../styles/themes/primary';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobaStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
