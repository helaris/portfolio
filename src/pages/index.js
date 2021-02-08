import React from "react"
import SEO from "../components/seo";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/Projects/Projects";
import Layout from "../components/Layout";


if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Helari Sosi's portfolio page to display work"
    />
    <Hero />
    <About />
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
