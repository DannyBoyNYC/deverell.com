import React from 'react';
import { graphql, Link } from 'gatsby';
import Nav from '../components/Nav';
import PortableText from '../components/portableText';

const Biography = ({ data: { bio } }) => {
  const pageName = 'biography';
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <Nav />
          <div className="page-details">
            <h1>William Deverell</h1>
            <h2>{pageName}</h2>
            <p>
              William Deverell, Winner of the Dashiell Hammett Award for
              Literary Excellence in North American Crime Writing
            </p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container" pagename={pageName}>
          <PortableText blocks={bio.nodes[0]._rawBody} />
          <Link to="/">&larr; back to home</Link>
        </div>
      </div>
    </>
  );
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
