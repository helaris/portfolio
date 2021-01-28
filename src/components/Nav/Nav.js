import React from 'react'
import { NavContainer, Logo } from './StyledNav';
import Burger from './Burger';



const Nav = () => {
  return (
    <NavContainer>
      <Logo>
        HS
      </Logo>
      <Burger />
    </NavContainer>
  )
}

export default Nav;