// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function getArticles(req, res) {
  const URL = `https://newsapi.org/v2/everything?q=crypto&pageSize=20&apiKey=${process.env.SECRET_KEY}`;
  const response = await axios.get(URL);
  res.status(200).json(response.data.articles);
}
