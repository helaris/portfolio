import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { NavLinks, Li, StyledLink } from './Nav.styled';

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

const RightNav = ({ open, setOpen }) => {
  const data = useStaticQuery(query);
  const { allStrapiNav: { nodes: links } } = data;

  return (
    <NavLinks open={open}>
      {links.map(l => (
        <Li key={l.strapiId} open={open}>
          <StyledLink to={`${l.path}`} onClick={() => setOpen(!open)}>{l.link}</StyledLink>
        </Li>
      ))}
    </NavLinks>
  )
}

export default RightNav;
