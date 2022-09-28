import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [coins, setCoins] = useState();
  const url = 'https://api.coingecko.com/api/v3/coins/bitcoin';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} coins={coins} />
      </Layout>
    </>
  );
}

export default MyApp;
