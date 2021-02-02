import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby';


const ProjectsContainer = styled.div`
margin: 50px 0;
text-align: center;
  h1 {
    font-size: 4rem;
  }
`;

const ProjectsWrapper = styled.div.attrs(props => ({
  className: props.className,
}))`

display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: center;
grid-gap: 10px;
width: 90%;
margin: 0 auto;
  /* & .Personal {
    grid-area: personal;
  }

  & .Book {
    grid-area: book;
  }
  & .Netflix {
    grid-area: netflix;
  }
  & .Checklist {
    grid-area: checklist;
  } */
  
`;

const ImageContent = styled.div`
  position: relative;
  /* box-shadow: 0 4px 8px 0 rgba(15, 28, 97, 0.2); */
  border-radius: 10px;

  h4 {
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 25%;
    transform: translate(-25%);
    font-size: 1.75rem;
    color: white;
    width: 100%;
  }

  &:hover h4 {
    display: none;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .content-overlay {
    background: rgba(15, 28, 97, 0.8);
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
  margin: 0 auto;
  }

  &:hover .content-overlay {
    opacity: 1;
    box-shadow: 0 4px 8px 0 rgba(15, 28, 97, 0.3);
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
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
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
    letter-spacing: 1px;
  }

  .fadeIn-bottom {
  top: 80%;
}

.test {
  padding: 0px 20px;
}
 `



const Projects = () => {
  const data = useStaticQuery(query);
  const { allStrapiProject: { nodes } } = data;
  return (
    <ProjectsContainer id="projects">
      <h1>Recent Projects</h1>
      <ProjectsWrapper>
        {nodes.map(i => (
          <ImageContent key={i.strapiId} className={i.title}>
            <Link to={`/project/${i.title}`}>
              <div className="content-overlay"></div>
              <Img fluid={i.cardImage.childImageSharp.fluid} />
              <h4>{i.title}</h4>
              <div className="content-details fadeIn-bottom">
                <h3>{i.title}</h3>
                <p className="test">{i.shortDesc}</p>
              </div>
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



