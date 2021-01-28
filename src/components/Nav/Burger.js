import React, { useState } from 'react';
import { StyledBurger } from './StyledNav';

import RightNav from './RightNav';

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
