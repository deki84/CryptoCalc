import React from 'react';
import styled from 'styled-components';

const News = () => {
  return (
    <div>
      <CryptoNews> News</CryptoNews>
    </div>
  );
};

export default News;

const CryptoNews = styled.h1`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
