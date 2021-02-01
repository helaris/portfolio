import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby';


const ProjectsContainer = styled.div`
text-align: center;
  h1 {
    font-size: 4rem;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center; 

`;

const ImageContent = styled.div`
  position: relative;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;

  img {
    border-radius: 10px;
  }

  .content-overlay {
    background: rgba(38, 43, 110, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  border-radius: 10px;
  z-index: 1;
  }

  &:hover .content-overlay {
    opacity: 1;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .content-details {
    position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  z-index: 9999;

  }

  &:hover .content-details{
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  &:hover h3, p{
    z-index: 999;
    color: #fff;
  }

  h3, p {
    color: #fff;
  }

  .fadeIn-bottom {
  top: 80%;
}
 `



const Projects = () => {
  const data = useStaticQuery(query);
  const { allStrapiProject: { nodes } } = data;
  return (
    <ProjectsContainer>
      <h1>Recent Projects</h1>
      <ProjectsWrapper>
        {nodes.map(i => (
          <ImageContent>
            <Link to={`/project/${i.title}`}>
              <div className="content-overlay"></div>
              <Img key={i.id} fixed={i.image.childImageSharp.fixed} />
              <div className="content-details fadeIn-bottom">
                <h3>{i.title}</h3>
                <p>{i.shortDesc}</p>
              </div>
            </Link>
          </ImageContent>
        ))}
        {/* {nodes.map(project => (
          <h1>
        ))} */}
        {/* <Img fluid={nodes[0].image.childImageSharp.fluid} /> */}
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects;

const query = graphql`
{
  allStrapiProject {
    nodes {
      id
      title
      shortDesc
      stacks {
        id
        title
      }
      image {
        childImageSharp {
          fixed(height: 400, width: 400) {
            ...GatsbyImageSharpFixed
          }
          id
        }
      }
    }
  }
}`;
