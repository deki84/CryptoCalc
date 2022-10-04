import styled from 'styled-components';

export default function Footer() {
  return (
    <nav>
      <Copyright>
        <FooterText>CryptoCalc</FooterText>
        <Rights>All Rights Reserved 2022</Rights>
      </Copyright>
    </nav>
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
  margin-bottom: 30px;
`;
const FooterText = styled.p`
  margin: 5px;
`;
