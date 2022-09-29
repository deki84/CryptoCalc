import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after, *::before {
    box-sizing:border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Holtwood One SC', serif;
    font-size: 10px;

    
}
`;

export default GlobalStyle;
