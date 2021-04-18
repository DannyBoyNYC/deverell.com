import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { SidebarMainPages } from '../components/sidebar';
import { SpecialLink } from '../components/link';
import PortableText from '../components/portableText';

const Biography = ({ data: { bio } }) => {
  const header = 'biography';
  const blurb = {
    block: `Winner of the Dashiell Hammett Award for Literary Excellence in North American Crime Writing. He can be reach at william.deverell@gmail.com`,
  };
  return (
    <>
      <SidebarMainPages header={header} blurb={blurb} />
      <div className="main bio">
        <div className="container">
          {/* <p>
            On this page: <a href="#temp">{bio.nodes[0].title}</a>{' '}
            {bio.nodes[1].title}
          </p> */}
          <PortableText blocks={bio.nodes[1]._rawBody} id="temp" />
          <hr />
          <PortableText blocks={bio.nodes[0]._rawBody} />
          <SpecialLink hrefLink="/">&larr; back to home</SpecialLink>
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
