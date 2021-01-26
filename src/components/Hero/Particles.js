import React from 'react';
import Particles from "react-tsparticles";
import './Hero.css';


const ParticlesBackground = () => {
  return (
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
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 35
          },
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
  )
}

export default ParticlesBackground;
