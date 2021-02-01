import { graphql } from 'gatsby'
import React from 'react'

const Project = ({ data }) => {
  const { strapiProject: project } = data;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.longDesc}</p>
    </div>
  )
}

export default Project

export const query = graphql`
  query ProjectTemp($strapiId: String!){
  strapiProject(strapiId: {eq: $strapiId}) {
    id
    title
    longDesc
    shortDesc
    stacks {
      id
      title
    }
  }
}`