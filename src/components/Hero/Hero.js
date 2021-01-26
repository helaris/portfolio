import React from 'react';
import { HeroContainer } from './StyledHero';
import ParticlesBackground from './Particles';
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <HeroContainer>
      <ParticlesBackground />
      <h1 data-sal="slide-down"
        data-sal-delay="200">Hello. I'm Helari</h1>
      <p data-sal="slide-up"
        data-sal-delay="200">Welcome to my portfolio</p>
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
