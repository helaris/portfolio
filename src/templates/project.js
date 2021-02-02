// import { graphql } from 'gatsby'
// import React from 'react'
// import Img from 'gatsby-image'
// import Nav from '../components/Nav/Nav';
// import GlobalStyle from '../styles/Global';


// const Project = ({ data }) => {
//   const { strapiProject: project } = data;

//   return (
//     <div>
//       <GlobalStyle />
//       <Nav />
//       <h1>{project.title}</h1>
//       <p>{project.longDesc}</p>
//       <Img fluid={project.image.childImageSharp.fluid} />
//     </div>
//   )
// }

// export default Project

// export const query = graphql`
//   query ProjectTemp($strapiId: String!){
//   strapiProject(strapiId: {eq: $strapiId}) {
//     id
//     title
//     longDesc
//     shortDesc
//     stacks {
//       id
//       title
//     }
//     image {
//       childImageSharp {
//         fluid(maxWidth: 900) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//   }
// }`