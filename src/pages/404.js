import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import RickMorty from '../images/mortynrick.png'
import PickleRickImg from '../images/picklerick.png';

const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  position: relative;
`;

const RickImg = styled.img`
  position: absolute;
  object-fit: contain;
`;

const PickleRick = styled.img`
  position: absolute;
  left: -180px;
  object-fit: contain;
  width: 30%;

  @media (max-width: 768px) {
  left: -110px;
  bottom: 0;
  width: 50%;
}
  
`;

const ErrorHeading = styled.h1`
position: absolute;
font-size: 10rem;
z-index: 1;
top: -170px;

@media (max-width: 768px) {
  font-size: 7rem;
  top: -80px;
}
`;

const ErrorP = styled.p`
position: absolute;
  top: 110px;
  font-weight: 600;
  font-size: 1.25rem;
  z-index: 1;

  @media (max-width: 768px) {
  font-size: 1rem;
}
`;

const StyledLink = styled(Link)`
  z-index: 1;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  color: inherit;
  border: 2px solid #0F1C61;
  border-radius: 5px;
  padding: 12px 24px;
`;

const Error = () => {
  return (
    <Layout>
      <ErrorContainer>
        <ErrorHeading>404</ErrorHeading>
        <RickImg src={RickMorty} alt="Rick and morty" />
        <PickleRick src={PickleRickImg} alt="Pickle Rick" data-sal="slide-right" data-sal-delay="800" />
        <ErrorP>Page not found. Wubba Lubba Dub Dub.</ErrorP>
        <StyledLink to="/">Go back to homepage</StyledLink>
      </ErrorContainer>
    </Layout>
  )
}

export default Error;
