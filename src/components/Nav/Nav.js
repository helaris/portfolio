import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';

const NavContainer = styled.nav`
  width: 90%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

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