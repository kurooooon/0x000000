import { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import { useEffect } from 'react';
import {
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/destyle.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0f4c75',
      },
      type: 'dark',
    },
    // overrides: {
    //   MuiTypography: {
    //     h1: {
    //       fontSize: '3rem',
    //     },
    //   },
    // },
  });

  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Wrapper>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
}

export default MyApp;
