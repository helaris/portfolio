import React from "react"
import SEO from "../components/seo";
import styled from 'styled-components';
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/Projects/Projects";
import Layout from "../components/Layout";


if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const ContentWrapper = styled.section`
  max-width: 1500px;
  margin: auto;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Helari Sosi's portfolio page to display work"
    />
    <ContentWrapper>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </ContentWrapper>
  </Layout>
)

export default IndexPage
