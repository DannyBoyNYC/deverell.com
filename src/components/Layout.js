import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

// import Footer from './Footer';

const SidebarStyles = styled.div`
  @media (min-width: 1266px) {
    display: flex;
  }
  .sidebar {
    color: rgba(255, 255, 255, 0.9);
    background-color: var(--black);
    @media (min-width: 1266px) {
      min-height: 100vh;
      width: 40%;
    }
  }
  .sidebar-container {
    width: 80%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1266px) {
    }
    /* .side-subhead {
      font-style: italic;
      font-size: 2rem;
      margin-top: 1rem;
    } */
  }
  .main {
    background-color: #e6e6e6;
    /* background-image: url('../assets/images/rag.png'); */
    @media (min-width: 1266px) {
      width: 60%;
    }
    .container {
      width: 94%;
      padding-top: 3em;
      padding-bottom: 4em;
      margin-left: auto;
      margin-right: auto;
      @media (min-width: 1266px) {
      }
    }
  }
  .page-details {
    margin-top: 5em;
    padding-bottom: 5em;
  }
`;

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <GlobalStyles />
      <Typography />
      <SidebarStyles>{children}</SidebarStyles>
      {/* <Footer /> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
