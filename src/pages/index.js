import React from "react"
import styled from "styled-components";
import SEO from "../components/seo"
import GlobalStyle from '../styles/Global';
import Header from '../components/Header/Header';

const Container = styled.div`
display: flex;
  height:95vh;
  background-color: #f4f9fc;
  margin: 20px;

  @media (max-width: 768px) {
    height: 100vh;
    margin: 0;
  }

`;

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <GlobalStyle />
    <Header />
  </Container>
)

export default IndexPage
