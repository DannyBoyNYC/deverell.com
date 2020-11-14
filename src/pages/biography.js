import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { SidebarMainPages } from '../components/sidebar';
import HomeLink from '../components/link/Link';
import PortableText from '../components/portableText';

const Biography = ({ data: { bio } }) => {
  const header = 'biography';
  const blurb = {
    block: `Winner of the Dashiell Hammett Award for Literary Excellence in North American Crime Writing`,
  };
  return (
    <>
      <SidebarMainPages header={header} blurb={blurb} />
      <div className="main bio">
        <div className="container">
          <PortableText blocks={bio.nodes[0]._rawBody} />
          <HomeLink />
        </div>
      </div>
    </>
  );
};

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
