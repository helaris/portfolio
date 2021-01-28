import styled from 'styled-components';

export const AboutContainer = styled.section`
/* max-width: 1200px; */
/* margin: 10px auto; */
padding: 70px;
display: flex;
justify-content: center;
align-items: center;

img {
  width: 100%;
  height: auto;
  margin: 0;
  /* padding: 0; */
  /* flex: 1; */
}

.about-text {
  display: flex;
  flex-direction: column;
  /* flex: 1; */


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
  /* width: 80%; */
  line-height: 1.5;
  font-size: 1.25rem;
  /* padding: 10px 20px 10px 0; */
}
}

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;

  img {
    order: 1;
    padding: 20px;
  }

  .about-text {
    order: 2;
    align-items: center;
  }
}
`;
