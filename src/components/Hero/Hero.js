import React from 'react';
import Particles from "react-tsparticles";
import styled from 'styled-components';

import './Hero.css';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 70vh;
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
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 3px;

  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Particles
        id="tsparticles"
        options={{
          particles: {
            color: {
              value: "#0F1C61"
            },
            links: {
              color: {
                value: "#0F1C61"
              },
              enable: true,
              opacity: 0.1,
              distance: 150,
            },
            move: {
              enable: true,
              speed: 2,
            },
            opacity: {
              value: 0.2
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
          },
          detectRetina: true,
        }}
      />
      <h1>Hello. I'm Helari</h1>
      <p>Welcome to my portfolio</p>
    </HeroContainer>
  )
}

export default Hero
