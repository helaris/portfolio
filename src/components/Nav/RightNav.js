import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { NavLinks } from './StyledNav';

const query = graphql` 
{
  allStrapiNav {
    nodes {
      link
      id
    }
  }
}

`

const RightNav = ({ open }) => {
  const data = useStaticQuery(query);
  const {
    allStrapiNav: { nodes: link }
  } = data;
  return (
    <NavLinks open={open}>
      {link.map(l => (
        <li key={l.id}>{l.link}</li>
      ))}
      {/* <li data-sal="slide-left" data-sal-delay="300">About</li>
      <li data-sal="slide-left" data-sal-delay="500">Projects</li> */}
    </NavLinks>
  )
}

export default RightNav
