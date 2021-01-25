import React from 'react';
import styled from 'styled-components';


const NavLinks = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  transform: ${({ open }) => open ? 'translateX(-20%)' : 'translateX(10%)'};
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: transform 0.3s linear;
  color: #0F1C61;

  li {
    padding: 10px;
    text-transform: uppercase;
    display: ${({ open }) => open ? 'block' : 'none'};
  }

  @media (max-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    flex-flow: column nowrap;
    background-color: #0F1C61;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    margin: 0;
    transition: all 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <NavLinks open={open}>
      <li>About Me</li>
      <li>Skills</li>
      <li>Work</li>
    </NavLinks>
  )
}

export default RightNav
