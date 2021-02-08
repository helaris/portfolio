import React from 'react'
import styled from 'styled-components';
import GlobalStyle from '../styles/Global';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const LayoutContainer = styled.div`
  /* max-width: 1500px;
  margin: 0 auto; */
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Nav />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
