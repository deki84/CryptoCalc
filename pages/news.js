import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsList from '../components/NewsList';
import { useState, useEffect } from 'react';

export default function News() {
  <CryptoNews>News</CryptoNews>;

  const [articles, setArticles] = useState([]);

  const newsApi =
    'https://newsapi.org/v2/everything?q=crypto&apiKey=1728cdee74b84c73a7a499ccbe61dd69';

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(newsApi);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <>
      <div>
        {articles.map((article) => {
          return (
            <NewsList
              key={article.id}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </div>
    </>
  );
}

const CryptoNews = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 70px;
`;
