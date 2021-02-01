import React from 'react';
import { Link } from 'gatsby';
import { NavLinks } from './StyledNav';
import scrollTo from 'gatsby-plugin-smoothscroll';

// const query = graphql` 
// {
//   allStrapiNav {
//     nodes {
//       link
//       id
//     }
//   }
// }

// `

const RightNav = ({ open }) => {

  return (
    <NavLinks open={open}>
      {/* {link.map(l => (
        <li key={l.id}>{l.link}</li>
      ))} */}
      <Link to="#about">About</Link>
      <Link to="#projects">Projects</Link>
      {/* <li data-sal="slide-left" data-sal-delay="300">About</li>
      <li data-sal="slide-left" data-sal-delay="500">Projects</li> */}
    </NavLinks>
  )
}

export default RightNav
