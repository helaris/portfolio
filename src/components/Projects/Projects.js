import React from 'react';
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby';

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
          fixed(height: 300, width: 300) {
            ...GatsbyImageSharpFixed
          }
          id
        }
      }
    }
  }
}`;

const Projects = () => {
  const data = useStaticQuery(query);
  // console.log(data)
  const { allStrapiProject: { nodes } } = data;
  console.log(nodes)
  return (
    <div>
      <h1>Recent Projects</h1>
      <div className="projects-wrapper">
        {nodes.map(i => (
          <>
            <Img key={i.id} fixed={i.image.childImageSharp.fixed} imgStyle={{ objectFit: 'contain' }} />
            <h1>{i.title}</h1>
            {i.stacks.map(s => (
              <li>{s.title}</li>
            ))}
          </>
        ))}
        {/* {nodes.map(project => (
          <h1>
        ))} */}
        {/* <Img fluid={nodes[0].image.childImageSharp.fluid} /> */}
      </div>
    </div>
  )
}

export default Projects
