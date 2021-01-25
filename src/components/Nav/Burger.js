import React, { useState } from 'react';
import styled from 'styled-components';

import RightNav from './RightNav';

const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 70px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 5;


  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: #0F1C61;
    transform-origin: 1px;
    transition: all 0.3s;

    &:nth-child(1){
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2){
      transform: ${({ open }) => open ? 'translateX(0)' : 'translatX(100%)'};
      opacity: ${({ open }) => open ? '0' : '1'};
    }
    &:nth-child(3){
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};

    }
  }
  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
    div {
    background-color: ${({ open }) => open ? 'white' : 'black'};
    }
  }
`

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RightNav open={open} />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default Burger
