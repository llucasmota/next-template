/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '@/shared/styles/theme';

import GlobalStyle from '../shared/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
