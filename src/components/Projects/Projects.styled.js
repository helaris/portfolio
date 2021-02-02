import styled from 'styled-components';
import Img from 'gatsby-image'

export const ProjectsContainer = styled.div`
margin: 50px 0;
text-align: center;
`;

export const ProjectsHeader = styled.h1`
  margin: 40px 0;
`;

export const CardTitle = styled.h4`
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 25%;
    transform: translate(-25%);
    font-size: 1.75rem;
    color: white;
    width: 100%;
    font-weight: 500;
    text-shadow: 1px 1px 8px rgba(150, 150, 150, 0.7);
`;

export const ProjectsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: center;
grid-gap: 15px;
width: 90%;
margin: 0 auto;

@media (max-width: 1024px) {
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 600px) {
  grid-template-columns: 1fr;
}
`;

export const ContentOverlay = styled.div`
  background: rgba(15, 28, 97, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  border-radius: 10px;
  z-index: 1;
  margin: 0 auto;
 `;

export const StyledImg = styled(Img)`
  border-radius: 10px;
`;

export const ContentDetails = styled.section`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  z-index: 9999;
`;

export const DetailsH3 = styled.h3`
  color: #fff;
  letter-spacing: 1px;
`;

export const DetailsP = styled.p`
  color: #fff;
  letter-spacing: 1px;
`;

export const ImageContent = styled.section`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(15, 28, 97, 0.2);
  border-radius: 10px;


  &:hover ${ContentOverlay} {
    opacity: 1;
    box-shadow: 0 4px 8px 0 rgba(15, 28, 97, 0.3);
  }

  &:hover ${CardTitle} {
    display: none;
  }

  &:hover ${ContentDetails}{
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  &:hover ${DetailsH3}, ${DetailsP}{
    z-index: 999;
    color: #fff;
  }

  .fadeIn-bottom {
  top: 80%;
}
 `

