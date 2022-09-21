import styled from 'styled-components';
export default function Home() {
  return (
    <div>
      <Headline>CryptoCalc</Headline>
    </div>
  );
}

const Headline = styled.h1`
  display: flex;
  justify-content: center;
`;
