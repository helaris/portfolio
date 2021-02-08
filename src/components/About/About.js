import React from 'react';
import { AboutContainer } from './About.styled';

import Helari from "../../images/hs.png";

const About = () => {
  return (
    <AboutContainer id="about">
      <section className="about-text">
        <h1 data-sal="slide-up" data-sal-delay="300">about me.</h1>
        <p data-sal="slide-up" data-sal-delay="300">I'm a Full-Stack developer based in Norway.</p>
        <p data-sal="slide-up" data-sal-delay="300">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat architecto adipisci ipsa veniam consequatur laboriosam soluta distinctio qui expedita libero,
        perspiciatis est sint repellat nisi vero in odio accusamus eveniet.
        </p>
      </section>
      <img src={Helari} alt="Animated person" data-sal="slide-up" data-sal-delay="200" />
    </AboutContainer>
  )
}

export default About;
