import React from 'react';
import { AboutContainer } from './About.styled';

import Helari from "../../images/Helari.svg";

const About = () => {
  return (
    <AboutContainer>
      <section className="about-text">
        <h1>about me.</h1>
        <p>I'm a Full-Stack developer based in Norway.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto adipisci ipsa veniam consequatur laboriosam soluta distinctio qui expedita libero, perspiciatis est sint repellat nisi vero in odio accusamus eveniet.</p>
      </section>
      <img src={Helari} alt="" />
    </AboutContainer>
  )
}

export default About
