import React from 'react';
import styled from 'styled-components';
import { SiPostgresql, SiNodeDotJs, SiHtml5, SiCss3, SiReact, SiJavascript, SiGatsby, SiMongodb, SiIonic, SiGit, SiGithub, SiFirebase, SiNetlify, SiHeroku, SiGraphql } from "react-icons/si";


const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  p {
    font-size: 1.25rem;
  }
`;

const TechWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
  justify-content: center;

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
    padding: 13px;
    font-weight: 400;

  }
`;


const Skills = () => {
  return (
    <SkillsWrapper>
      <h1>Skills and tools</h1>
      <p>Here are some of the technologies and tools I've been working with.</p>
      <TechWrapper>
        <div className="icon">
          <SiHtml5 />
          <span>HTML</span>
        </div>
        <div className="icon">
          <SiCss3 />
          <span>CSS</span>
        </div>
        <div className="icon">
          <SiJavascript />
          <span>JavaScript</span>
        </div>
        <div className="icon">
          <SiReact />
          <span>ReactJS</span>
        </div>
        <div className="icon">
          <SiGatsby />
          <span>Gatsby</span>
        </div>
        <div className="icon">
          <SiIonic />
          <span>Ionic</span>
        </div>
        <div className="icon">
          <SiNodeDotJs />
          <span>NodeJS</span>
        </div>
        <div className="icon exp">
          <h3>ex</h3>
          <span>ExpressJS</span>
        </div>
        <div className="icon">
          <SiMongodb />
          <span>MongoDB</span>
        </div>
        <div className="icon">
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>
        <div className="icon">
          <SiGit />
          <span>Git</span>
        </div>
        <div className="icon">
          <SiGithub />
          <span>GitHub</span>
        </div>
        <div className="icon">
          <SiFirebase />
          <span>Firebase</span>
        </div>
        <div className="icon">
          <SiNetlify />
          <span>Netlify</span>
        </div>
        <div className="icon">
          <SiHeroku />
          <span>Heroku</span>
        </div>
        <div className="icon">
          <SiGraphql />
          <span>GraphQL</span>
        </div>
      </TechWrapper>
    </SkillsWrapper>
  )
}

export default Skills
