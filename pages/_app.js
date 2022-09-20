import GlobalStyle from '../components/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
