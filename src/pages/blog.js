import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Nav from '../components/Nav';
import HomeLink from '../components/link/Link';
import PortableText from '../components/portableText';

const Blog = ({ data: { postPreviews } }) => {
  const pageName = 'blog';
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <Nav />
          <div className="page-details">
            <h1>William Deverell</h1>
            <h2 className="side-subhead">~ blog posts ~</h2>
            <p>
              The future home of my various noodlings. Mostly, but not
              exclusively, about my books.
            </p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container" pagename={pageName}>
          {postPreviews.nodes.map((node) => (
            <div key={node.id}>
              <p className="small">
                {format(new Date(node.publishedAt), 'MMMM d, yyyy')}
              </p>

              <h2>
                <Link to={`/blog/${node.slug.current}`}>{node.title}</Link>
              </h2>
              <PortableText blocks={node._rawExcerpt} />
            </div>
          ))}
          <HomeLink />
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
};

export default Blog;

export const query = graphql`
  query PostPageQuery {
    postPreviews: allSanityPost {
      nodes {
        id
        slug {
          current
        }
        title
        publishedAt
        _rawExcerpt
      }
    }
  }
`;
