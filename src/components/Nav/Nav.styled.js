import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavContainer = styled.nav`
max-width: 90%;
height: 6vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;
margin: 0 auto;
position: relative;
`;

export const Logo = styled.div`
font-size: 1.5rem;
color: #0F1C61;
border-radius: 3px;
padding: 10px
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const Li = styled.li`
    color: #0F1C61;
    padding: 10px 20px;
    text-transform: uppercase;
    display: ${({ open }) => open ? 'block' : 'none'};

    &:hover{
      background-color: #273371;
      transition: all 0.2s ease-in;
      border-radius: 4px;
      ${StyledLink}{
      color: #fff;
      }
    }

    @media (max-width: 786px) {
      color: #fff;
      padding-top: 50px;
    }
`;




export const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20;
  right: 0;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 421;


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
      width: 1.75rem;
      align-self: flex-end;
    }
    &:nth-child(3){
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};

    }
  }
  @media (max-width: 768px) {
    top: 25px;
    right: 20px;
  }
`

export const NavLinks = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  transform: ${({ open }) => open ? 'translateX(-20%)' : 'translateX(10%)'};
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: transform 0.3s linear;
  color: #0F1C61;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    flex-flow: column nowrap;
    background-color: #273371;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 230px;
    padding-top: 2.75rem;
    margin: 0;
    transition: all 0.3s ease-in-out;
    z-index: 420;

  }
`;

export const StickyNav = styled.div`
  position: sticky;
  padding: 10px;
  top: 0;
  background: ${({ show }) => show ? "#273371" : "none"};
  box-shadow: ${({ show }) => show ? '0px 6px 16px -3px rgba(0,0,0,0.5)' : 'none'};
  transition: all 0.5s ease-out;
  z-index: 999;

  & ${Logo} {
    color: ${({ show }) => show ? 'white' : '#0F1C61'};
    border: ${({ show }) => show ? '2px solid white' : '2px solid #0F1C61'};  
  }

  & ${Li} {
    color: ${({ show }) => show ? 'white' : '#0F1C61'};
  }

  & ${StyledBurger} > div{
    background: ${({ show }) => show ? 'white' : '#0F1C61'};
  }

  @media (max-width: 768px){
    /* background: none;
    box-shadow: none;
    transition: none; */
    width: 100%;
    position: fixed;

    & ${Li} {
    color: white;
  }

  /* & ${StyledBurger} > div{
    background: ${({ open }) => open ? 'white' : '#0F1C61'};
  } */

  /* & ${Logo} {
    border: 2px solid #0F1C61;
    color: #0F1C61;
  } */

  }
`;