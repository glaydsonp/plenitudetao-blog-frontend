import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { SWRConfig } from 'swr';

import GlobaStyle from '../styles/global';
import theme from '../styles/themes/primary';

axios.defaults.baseURL = 'http://plenitudetao.com/blog-api/wp-json/wp/v2';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobaStyle />
    <SWRConfig
      value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  </ThemeProvider>
);

export default MyApp;
