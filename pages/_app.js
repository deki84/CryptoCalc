import GlobalStyle from '../components/GlobalStyle';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
