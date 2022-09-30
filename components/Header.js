import Navbar from './Navbar';
import NavLink from 'next/link'
import styled from 'styled-components';
 
export default function Header() {
  return (
    <>
    <Div>
      <StyleHeadlineLink>
        <NavLink href = "/" > 
      <a>Cryptocalc</a> 
      </NavLink> </StyleHeadlineLink>
      <CryptoStyle> <NavLink href = "/crypto">
      <a>Crypto</a></NavLink>
      </CryptoStyle>
      <NewsStyle><NavLink href = "/news">
            <a>News</a> 
         </NavLink></NewsStyle>
     </Div>
  <Navbar/>
  </>
  )}

const Div =styled.div`
position: absolute;
display:Flex;
font-size: 14px;





`



const StyleHeadlineLink =styled.div`
justify-self: center;
margin-left: 70px;
margin-top: 10px;



` 




const NewsStyle = styled.div`
margin-top:10px;
margin-left: 20px
`


const CryptoStyle = styled.div`
margin-top: 10px;
margin-left: 20px;
`



