import styled from 'styled-components';

export const NavContainer = styled.nav`
width: 90%;
height: 8vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
margin: 0 auto;
position: relative;
`;

export const Logo = styled.div`
font-size: 1.5rem;
color: #0F1C61;
border: 2px solid #0F1C61;
border-radius: 3px;
padding: 10px
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
  /* @media (min-width: 1480px) {
    top: 55px;
    right: 70px;
  } */
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


  li {
    padding: 10px 20px;
    text-transform: uppercase;
    display: ${({ open }) => open ? 'block' : 'none'};

    &:hover {
      background-color: #0F1C61;
      color: #fff;
      transition: all 0.2s ease-in;
      border-radius: 10px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    flex-flow: column nowrap;
    background-color: #0F1C61;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    margin: 0;
    transition: all 0.3s ease-in-out;

    li {
      color: #fff;
    }

    a{
      color: inherit;
    }
  }
`;