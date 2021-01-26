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
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: #0F1C61;
  border: 2px solid #0F1C61;
  border-radius: 3px;
  padding: 10px
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