#  CryptoCalc

<img width="378" alt="Screenshot 2022-10-14 at 12 42 29" src="https://user-images.githubusercontent.com/35610295/195828464-36baf1e2-ecb2-4214-b7d0-553664453740.png">

## Capstone Project of the IT bootcamp at neuefische

CryptoCalc gives users the option to enter a cryptocurrency and monthly expenses, and the app calculates how many months you can live off your cryptocurrency without having to access your savings account.

https://user-images.githubusercontent.com/35610295/195830947-ccadbc0f-9dd3-437e-892d-676813a6a462.mov

### Deployment

You can have a look at the last update of CryptoCalc on Vercel: [DemoVersion](https://capstone-project-deki84.vercel.app/)

### Tech Stack

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [styled components](https://styled-components.com/)
- [axios](https://axios-http.com/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- [News Api](https://newsapi.org/)
- [Jest](https://jestjs.io/)
- [Figma](https://www.figma.com)

This project was created using [Create Next App](https://nextjs.org/docs)

### Project Setup

you can clone this repository

$ `npm install` installs all the files and dependencies the app needs to run

You need an api_key from [CoinGecko API](https://www.coingecko.com/en/api) &
 [News Api](https://newsapi.org/)
`.env.local` API_KEY=example123456-3456similar - please check to have added `env.local` in your `.gitignore`

$ `npm run dev` runs the app in dev mode and opens http://localhost:3000 to view it in your browser. Or you will be asked to confirm another port if this one isn't available.

$ `npm test` runs the tests
