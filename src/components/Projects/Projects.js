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

  const removeSpaces = (title) => title.split(" ").join("");


  return (
    <ProjectsContainer id="projects">
      <ProjectsHeader data-sal="slide-up" data-sal-delay="300">Recent projects</ProjectsHeader>
      <ProjectsWrapper>
        {nodes.map(i => (
          <ImageContent key={i.strapiId} className={i.title} data-sal="slide-up" data-sal-delay="200">
            <Link to={`/project/${removeSpaces(i.title)}`}>
              <ContentOverlay />
              <StyledImg fluid={i.cardImage.childImageSharp.fluid} alt={i.title} />
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
          fluid(quality: 100, maxHeight: 275, maxWidth: 400){
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



