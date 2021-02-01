import React from 'react';
import styled from 'styled-components';
import { SiPostgresql, SiNodeDotJs, SiHtml5, SiCss3, SiReact, SiJavascript, SiGatsby, SiMongodb, SiIonic, SiGit, SiGithub, SiFirebase, SiNetlify, SiHeroku, SiGraphql } from "react-icons/si";


const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;


  h1 {
    font-size: 4rem;
    margin: 0;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.75rem;
    }
  }
`;

const TechWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
  justify-content: center;
  margin: 20px 0;
  svg {
    margin: 0 10px;
    border: 3px solid #0F1C61;
    border-radius: 10px;
    padding: 10px;
    font-size: 5rem;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 5px;
    }

  }


  h3 {
    font-size: 4rem;
    margin: 0;
    border: 3px solid #0F1C61;
    border-radius: 10px;
    padding: 11px 14px;
    font-weight: 400;

  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

`;


const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <h1 data-sal="slide-up" data-sal-delay="300">skills and tools.</h1>
      <p data-sal="slide-up" data-sal-delay="300">Here are some of the technologies and tools I've been working with.</p>
      <TechWrapper>
        <div className="icon" data-sal="slide-right" data-sal-delay="400">
          <SiHtml5 />
          <span>HTML</span>
        </div>
        <div className="icon" data-sal="slide-rigt" data-sal-delay="300">
          <SiCss3 />
          <span>CSS</span>
        </div>
        <div className="icon" data-sal="slide-right" data-sal-delay="200">
          <SiJavascript />
          <span>JavaScript</span>
        </div>
        <div className="icon" data-sal="slide-right" data-sal-delay="100">
          <SiReact />
          <span>ReactJS</span>
        </div>
        <div className="icon" data-sal="slide-left" data-sal-delay="100">
          <SiGatsby />
          <span>Gatsby</span>
        </div>
        <div className="icon" data-sal="slide-left" data-sal-delay="200">
          <SiIonic />
          <span>Ionic</span>
        </div>
        <div className="icon" data-sal="slide-left" data-sal-delay="300">
          <SiNodeDotJs />
          <span>NodeJS</span>
        </div>
        <div className="icon exp" data-sal="slide-left" data-sal-delay="400">
          <h3>ex</h3>
          <span>ExpressJS</span>
        </div>
        <div className="icon" data-sal="slide-right" data-sal-delay="400">
          <SiMongodb />
          <span>MongoDB</span>
        </div>
        <div className="icon" data-sal="slide-right" data-sal-delay="300">
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>
        <div className="icon" data-sal="slide-right" data-sal-delay="200">
          <SiGit />
          <span>Git</span>
        </div>
        <div className="icon" data-sal="slide-right" data-sal-delay="100">
          <SiGithub />
          <span>GitHub</span>
        </div>
        <div className="icon" data-sal="slide-left" data-sal-delay="100">
          <SiFirebase />
          <span>Firebase</span>
        </div>
        <div className="icon" data-sal="slide-left" data-sal-delay="200">
          <SiNetlify />
          <span>Netlify</span>
        </div>
        <div className="icon" data-sal="slide-left" data-sal-delay="300">
          <SiHeroku />
          <span>Heroku</span>
        </div>
        <div className="icon" data-sal="slide-left" data-sal-delay="400">
          <SiGraphql />
          <span>GraphQL</span>
        </div>
      </TechWrapper>
    </SkillsWrapper>
  )
}

export default Skills
