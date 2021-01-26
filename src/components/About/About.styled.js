import styled from 'styled-components';

export const AboutContainer = styled.section`
max-width: 1200px;
margin: 10px auto;
display: flex;
justify-content: center;
align-items: center;

img {
  width: 100%;
  height: auto;
}
`;

export const AboutText = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
  font-size: 4rem;
  margin: 0;

  &::after{
    content: '';
    display: block;
    background-color: #0F1C61;
    width: 190px;
    height: 5px;
    margin: 10px 0;
    border-radius: 10px;
  }
}

p {
  width: 80%;
  line-height: 1.5;
  font-size: 1.25rem;
  /* padding: 10px 20px 10px 0; */
}
`;