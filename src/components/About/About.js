import React from 'react';
import { AboutContainer } from './About.styled';

import Helari from "../../images/hs.png";

const About = () => {
  return (
    <AboutContainer id="about">
      <section className="about-text">
        <h1 data-sal="slide-up" data-sal-delay="300">about me.</h1>
        <p data-sal="slide-up" data-sal-delay="300">I'm a Full-Stack developer based in Norway.</p>
        <p data-sal="slide-up" data-sal-delay="300">Improving my skills and expanding my horizon within tech is something I am passionate about. I’m confident working in both team and self-directed settings. Positive attitude,
        fast learner and love to juggle multiple responsibilities simultaneously.
        </p>
      </section>
      <img src={Helari} alt="Animated person" data-sal="slide-up" data-sal-delay="200" />
    </AboutContainer>
  )
}

export default About;
