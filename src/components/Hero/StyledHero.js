import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
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
`;