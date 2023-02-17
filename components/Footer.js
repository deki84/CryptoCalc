import styled from 'styled-components';

export default function Footer() {
  return (
    <Copyright>
      <FooterText>CryptoCalc</FooterText>
      <Rights>All Rights Reserved 2023</Rights>
      <Founder> Deki84 </Founder>
    </Copyright>
  );
}
const Copyright = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #d9d9d9;
  height: 60px;
  margin-top: 210px;
  flex-direction: column;
  align-items: center;
`;
const Rights = styled.p`
  font-family: 'PT Sans', sans-serif;
  margin: 0;
  margin-bottom: 10px;
`;
const FooterText = styled.p`
  margin: 2px;
`;
const Founder = styled.p`
  position: absolute;
  color: black;
  font-family: 'Marko One', serif;
  margin-top: 40px;
`;
