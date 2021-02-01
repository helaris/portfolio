import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    ${'' /* max-width: 1400px; */}
    margin: 20px;
    padding: 0;
    font-family: "Montserrat";
    background-color: #f4f9fc;
    color: #0F1C61;
  }

  @media (max-width: 768px) {
    html, body {
      overflow-x: hidden;
    }
    
    body {
      margin: 0;
    }
  }
`
export default GlobalStyle;