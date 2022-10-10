import React from 'react';
import styled from 'styled-components';

export default function NewsList({ title, description, url, urlToImage }) {
  return (
    <span>
      <ImagetoLink
        width={240}
        height={150}
        src={urlToImage}
        alt="desription Image to the url "
      />
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <DescriptionStyle>{description}</DescriptionStyle>
    </span>
  );
}

const DescriptionStyle = styled.p`
  margin: 30px;
`;

const ImagetoLink = styled.img`
  z-index: 1;
`;
