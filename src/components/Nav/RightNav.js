import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby"
import { NavLinks } from './Nav.styled';

export const query = graphql`
{
  allStrapiNav {
  nodes {
    strapiId
    link
    path
  }
}
}`

const RightNav = ({ open }) => {
  const data = useStaticQuery(query);
  const { allStrapiNav: { nodes: links } } = data;

  return (
    <NavLinks open={open}>
      {links.map(l => (
        <li key={l.strapiId}>
          <Link to={`${l.path}`}>{l.link}</Link>
        </li>
      ))}
    </NavLinks>
  )
}

export default RightNav;
