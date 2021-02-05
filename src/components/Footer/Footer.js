import React from 'react'
import styled from 'styled-components';

import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

const FooterContainer = styled.footer`
  height: 12vh;
  background-color: #0F1C61;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 30px;
  margin: 0;

  .custom-shape-divider-top-1612533605 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1612533605 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 20px;
}

.custom-shape-divider-top-1612533605 .shape-fill {
    fill: #f4f9fc;
}
`;

const SocialWrapper = styled.div`

`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  margin: 10px;

  svg {
  color: #fff;

  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialWrapper>
        <StyledLink href="https://github.com/helaris" target="_blank" rel="noreferrer">
          <GoMarkGithub />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/helarisosi/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </StyledLink>
      </SocialWrapper>
      <p>COPYRIGHT &copy;2021 HELARI SOSI ALL RIGHTS RESERVED</p>
      <div class="custom-shape-divider-top-1612533605">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </FooterContainer>
  )
}

export default Footer