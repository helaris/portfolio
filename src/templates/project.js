import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { SiGithub } from "react-icons/si";
import Layout from '../components/Layout';

import Projects from '../components/Projects/Projects';


const ProjectContainer = styled.section`
  max-width: 1300px;
  margin: 50px auto;
`;

const ProjectH1 = styled.h1`
  margin: 50px 0 10px 0;
`;

const ProjectP = styled.p`
  max-width: 70%;
  line-height: 1.5;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(15, 28, 97, 0.2);
`;

const Ul = styled.ul`
  padding-left: 15px;
  margin: 0;
  margin-bottom: 20px;
`;

const Li = styled.li`
  padding: 5px 0;
  font-size: 1.25rem;
`;

const Heading4 = styled.h4`
  font-size: 1.25rem;
  margin: 10px 0;
`;

const Atag = styled.a`
  border: 3px solid #0F1C61;
  border-radius: 5px;
  padding: 12px 28px;
  margin-right: 10px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    padding-right: 10px;
    font-size: 1.5rem;
  }
`;

const ProjectInfo = styled.section`
  display: flex;
  flex-direction:column;
  margin: 20px 40px;

  @media (max-width: 768px) {
    margin: 20px 15px;

    & ${Ul} {
      margin: 0 5px;
    } 

    & ${Atag} {
      margin-top: 20px;
    }
  }
`;

const StackActions = styled.div`
  display: flex;
`;



const Project = ({ data }) => {
  const { strapiProject: project } = data;

  return (
    <Layout>
      <ProjectContainer>
        <StyledImg fluid={project.bigImg.childImageSharp.fluid} className={project.title} />
        <ProjectInfo>
          <ProjectH1>{project.title}</ProjectH1>
          <ProjectP>{project.longDesc}</ProjectP>
          <Heading4>Stack :</Heading4>
          <Ul>
            {project.stacks.map(stack => (
              <Li>{stack.title}</Li>
            ))}
          </Ul>
          <StackActions>
            <Atag href={`${project?.github_repo_front}`} target="_blank" rel="noopener noreferrer"><SiGithub />Github</Atag>
            {project.liveLink && <Atag href={`${project.liveLink}`} target="_blank" rel="noopener noreferrer">Live</Atag>}
          </StackActions>
        </ProjectInfo>
        <Projects />
      </ProjectContainer>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ProjectTemp($strapiId: String!){
  strapiProject(strapiId: {eq: $strapiId}) {
    strapiId
    title
    longDesc
    stackExplanation
    github_repo_front
    liveLink
    stacks {
      id
      title
    }
    bigImg {
      childImageSharp {
        fluid(quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}`