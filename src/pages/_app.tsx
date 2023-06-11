import Footer from '../components/Footer';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import { useEffect } from 'react';
import { createTheme, ThemeProvider as MaterialThemeProvider, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import '../styles/destyle.css';
import '../styles/global.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0f4c75',
      },
      mode: 'dark',
    },
  });

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default MyApp;
