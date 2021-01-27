import React from 'react';
import { NavLinks } from './StyledNav';



const RightNav = ({ open }) => {
  return (
    <NavLinks open={open}>
      <li data-sal="slide-left" data-sal-delay="300">About</li>
      <li data-sal="slide-left" data-sal-delay="500">Projects</li>
    </NavLinks>
  )
}

export default RightNav
