import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          coins={coins}
          handleChange={handleChange}
          filteredCoins={filteredCoins}
        />
      </Layout>
    </>
  );
}

export default MyApp;
