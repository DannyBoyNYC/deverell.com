import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

// import Footer from './Footer';

const PageStyles = styled.div`
  @media (min-width: 1266px) {
    display: flex;
  }
  .main {
    background-color: var(--background-gray);
    @media (min-width: 1266px) {
      width: 60%;
    }
    .container {
      width: 94%;
      padding-top: 3em;
      padding-bottom: 4em;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <GlobalStyles />
      <Typography />
      <PageStyles>{children}</PageStyles>
      {/* <Footer /> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
