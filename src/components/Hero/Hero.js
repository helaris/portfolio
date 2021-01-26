import React from 'react';
import styled from 'styled-components';
import ParticlesBackground from './Particles';
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";



const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #0F1C61;
  position: relative;

  h1 {
    font-size: 4rem;
    width: 400px;
    margin: 0 auto;
    letter-spacing: 3px;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-weight: 300;
  }

  .arrow {
    position: absolute;
    bottom: 0;
    font-size: 4rem;
  }

  .social {
    position: absolute;
    left: 50px;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    padding: 10px;
    cursor: pointer;
    &::before {
      content: '';
      height: 100px;
      width: 2px;
      background-color: #0F1C61;
      position: absolute;
      top: -100px;
      left: 34px;
    }
    a {
      color: inherit;
    }
    svg {
      padding: 10px;

      &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        color: lightblue;
      }
    }
  }
  @media (max-width: 768px) {
    .social {
      display: none;
    }
  }
  `;

const Hero = () => {
  return (
    <HeroContainer>
      <ParticlesBackground />
      <h1>Hello. I'm Helari</h1>
      <p>Welcome to my portfolio</p>
      <div className="arrow">
        <MdKeyboardArrowDown />
      </div>
      <div className="social">
        <a href="https://github.com/helaris" target="_blank" rel="noreferrer">
          <GoMarkGithub />
        </a>
        <a href="https://www.linkedin.com/in/helarisosi/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
      </div>
    </HeroContainer>
  )
}

export default Hero
