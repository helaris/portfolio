import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    background-color: #f4f9fc;
    color: #0F1C61;

  }

  @media (max-width: 768px) {
    body {
      margin: 0;
    }
  }
`
export default GlobalStyle;