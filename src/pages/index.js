import React from "react"
import styled from "styled-components";
import SEO from "../components/seo"
import GlobalStyle from '../styles/Global';
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/Projects/Projects";

const Container = styled.div`
max-width: 1500px;
margin: auto;
  /* display: flex;
  flex-direction: column; */
  /* background-color: #f4f9fc; */

`;

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <GlobalStyle />
    <Nav />
    <Hero />
    <About />
    <Skills />
    <Projects />
  </Container>
)

export default IndexPage
