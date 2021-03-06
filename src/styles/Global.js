import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

  body {
    margin: 0;
    font-family: "Montserrat";
    background-color: #f4f9fc;
    color: #0F1C61;
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }


  @media (max-width: 768px) {
    html, body {
      overflow-x: hidden;
    }
    
    body {
      margin: 0;
    }

    h1 {
      font-size: 3.25rem;
    }
  }

`
export default GlobalStyle;