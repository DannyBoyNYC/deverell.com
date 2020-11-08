import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Nav from '../components/Nav';
import HomeLink from '../components/link/Link';
import PortableText from '../components/portableText';

const Biography = ({ data: { bio } }) => (
  <>
    <div className="sidebar">
      <div className="sidebar-container">
        <Nav />
        <div className="page-details">
          <h1>About William Deverell</h1>
          <h2 className="side-subhead">~ biography ~</h2>
          <p>
            Winner of the Dashiell Hammett Award for Literary Excellence in
            North American Crime Writing
          </p>
        </div>
      </div>
    </div>
    <div className="main bio">
      <div className="container">
        <PortableText blocks={bio.nodes[0]._rawBody} />
        <HomeLink />
      </div>
    </div>
  </>
);

Biography.propTypes = {
  data: PropTypes.object,
};

export default Biography;

export const query = graphql`
  query Biography {
    bio: allSanityBio {
      nodes {
        title
        _rawBody
      }
    }
  }
`;
