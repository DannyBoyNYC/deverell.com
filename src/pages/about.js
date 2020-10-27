import React from 'react';
import { graphql, Link } from 'gatsby';

import { PortableText } from '../components/Bio';

const About = ({ data: { bio } }) => (
  <div className="about">
    {/* {JSON.stringify(data.bio.nodes[0], null, 2)} */}
    <h2>{bio.nodes[0].title}</h2>
    <PortableText blocks={bio.nodes[0]._rawBody} />
    <Link to="/">&larr; back to home</Link>
  </div>
);

export default About;

export const query = graphql`
  query Bio {
    bio: allSanityBio {
      nodes {
        title
        _rawBody
      }
    }
  }
`;
