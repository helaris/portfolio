import React from 'react';
import { Link } from 'gatsby';
import ParticlesBackground from './Particles';
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { HeroContainer, Hello, Welcome, ArrowDown, SocialButtons } from './StyledHero';

const Hero = () => {
  return (
    <HeroContainer>
      <ParticlesBackground />
      <Hello data-sal="slide-down" data-sal-delay="300">
        Hello. I'm Helari
      </Hello>
      <Welcome data-sal="slide-up" data-sal-delay="400">Welcome to my portfolio</Welcome>
      <ArrowDown>
        <Link to="#about">
          <MdKeyboardArrowDown data-sal="slide-up" data-sal-delay="500" />
        </Link>
      </ArrowDown>
      <SocialButtons data-sal="slide-up" data-sal-delay="400">
        <a data-sal="slide-up" data-sal-delay="500" href="https://github.com/helaris" target="_blank" rel="noreferrer">
          <GoMarkGithub />
        </a>
        <a data-sal="slide-up" data-sal-delay="600" href="https://www.linkedin.com/in/helarisosi/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
      </SocialButtons>
    </HeroContainer>
  )
}

export default Hero
