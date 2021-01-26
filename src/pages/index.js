import React from "react"
import styled from "styled-components";
import SEO from "../components/seo"
import GlobalStyle from '../styles/Global';
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height:calc(100vh - 40px);
  background-color: #f4f9fc;
  

  @media (max-width: 768px) {
    height: 100vh;
    margin: 0;
  }

`;

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <GlobalStyle />
    <Nav />
    <Hero />
    <About />
  </Container>
)

export default IndexPage
