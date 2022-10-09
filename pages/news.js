import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsList from '../components/NewsList';
import { useState, useEffect } from 'react';

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('/api/hello');
      setArticles(response.data);
    };
    getArticles();
  }, []);
  return (
    <>
      <CryptoNews>News</CryptoNews>
      <MainContent>
        {articles.map((article) => {
          return (
            <NewsListStyling key={article.id}>
              <NewsList
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </NewsListStyling>
          );
        })}
      </MainContent>
    </>
  );
}

const MainContent = styled.main`
  margin: 3px;
`;

const NewsListStyling = styled.span`
  display: Flex;
  justify-content: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
`;

const CryptoNews = styled.h1`
  display: fixed;
  justify-content: center;
  margin: 0;
  padding: 70px;
`;
