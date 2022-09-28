import GlobalStyle from '../components/GlobalStyle';
import { useState, useEffect } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [coins, setCoin] = useState();

  function addDataCoins(coinsData) {
    setCoin([coinsData, ...coins]);
  }

  const url = 'https://api.coingecko.com/api/v3/coins/bitcoin';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} coins={coins} />
    </>
  );
}
export default MyApp;
