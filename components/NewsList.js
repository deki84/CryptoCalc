import React from 'react';

export default function NewsList({ title, description, url, urlToImage }) {
  return (
    <span>
      <span>
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </span>
    </span>
  );
}
