import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsHeader,
  CardTitle,
  StyledImg,
  ImageContent,
  ContentOverlay,
  ContentDetails,
  DetailsH3,
  DetailsP,
} from "./Projects.styled";

const Projects = () => {
  const data = useStaticQuery(query);
  const { allStrapiProject: { nodes } } = data;
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeader>Recent projects</ProjectsHeader>
      <ProjectsWrapper>
        {nodes.map(i => (
          <ImageContent key={i.strapiId} className={i.title}>
            <Link to={`/project/${i.title}`}>
              <ContentOverlay />
              <StyledImg fluid={i.cardImage.childImageSharp.fluid} />
              <CardTitle>{i.title}</CardTitle>
              <ContentDetails className="fadeIn-bottom">
                <DetailsH3>{i.title}</DetailsH3>
                <DetailsP>{i.shortDesc}</DetailsP>
              </ContentDetails>
            </Link>
          </ImageContent>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects;

const query = graphql`
{
  allStrapiProject {
    nodes {
      strapiId
      title
      shortDesc
      longDesc
      cardImage {
        childImageSharp {
          fluid(quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      stacks {
        id
        title
      }
    }
  }
}`;



