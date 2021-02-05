import React from 'react'
import GlobalStyle from '../styles/Global';
import Nav from '../components/Nav/Nav';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Nav />
      {children}
    </LayoutContainer>
  )
}

export default Layout
