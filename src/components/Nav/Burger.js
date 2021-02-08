import React from 'react';
import { StyledBurger } from './Nav.styled';

import RightNav from './RightNav';

const Burger = ({ open, setOpen }) => {

  return (
    <>
      <RightNav open={open} setOpen={setOpen} />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default Burger
