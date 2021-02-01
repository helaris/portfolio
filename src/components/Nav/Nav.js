import React from 'react'
import { NavContainer, Logo } from './StyledNav';
import Burger from './Burger';
import { Link } from 'gatsby';



const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo>
          HS
      </Logo>
      </Link>
      <Burger />
    </NavContainer>
  )
}

export default Nav;