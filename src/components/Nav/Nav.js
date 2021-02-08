import React, { useState, useEffect } from 'react'
import { StickyNav, NavContainer, Logo } from './Nav.styled';
import Burger from './Burger';
import { Link } from 'gatsby';



const Nav = () => {
  const [show, handleShow] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', handleShow(false));
    }
  }, []);

  return (
    <StickyNav show={show} open={open}>
      <NavContainer>
        <Link to="/">
          <Logo>
            HS
      </Logo>
        </Link>
        <Burger setOpen={setOpen} open={open} />
      </NavContainer>
    </StickyNav>
  )
}

export default Nav;