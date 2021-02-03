import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Nav from '../components/Nav/Nav';
import GlobalStyle from '../styles/Global';


const ProjectContainer = styled.section`
  max-width: 1300px;
  margin: 50px auto;
`;

const ProjectH1 = styled.h1`
  margin: 10px 0;
`;

const ProjectP = styled.p`
  width: 70%;
  line-height: 1.5;
`;

const Wrapper = styled.section.attrs(props => ({
  className: props.className,
}))`

  & .Checklist {
    width: 30%;
  }

  & .Polka {
    flex: 1;
  }

  & .Clone {
    flex: 1;
  }

  display: flex;
  margin: 100px auto;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin: 0;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(15, 28, 97, 0.2);
  margin-right:50px;
`;

const StackExplanation = styled.section`
  flex: 1;

  p {
    line-height: 1.5;
  }
`;

const Project = ({ data }) => {
  const { strapiProject: project } = data;

  return (
    <>
      <GlobalStyle />
      <Nav />
      <ProjectContainer>
        <ProjectH1>{project.title}</ProjectH1>
        <ProjectP>{project.longDesc}</ProjectP>
        <Wrapper>
          <StyledImg fluid={project.bigImg.childImageSharp.fluid} className={project.title} />
          <StackExplanation>
            <h1>Stack Explanation</h1>
            <p>{project.stackExplanation}</p>
            <ul>
              {project.stacks.map(stack => (
                <li>{stack.title}</li>
              ))}
            </ul>
          </StackExplanation>
        </Wrapper>
      </ProjectContainer>
    </>
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