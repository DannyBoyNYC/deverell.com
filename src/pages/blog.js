import React from 'react';
import { graphql, Link } from 'gatsby';
import Nav from '../components/Nav';
import PortableText from '../components/portableText';

const Blog = ({ data: { posts } }) => {
  const pageName = 'blog';
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <Nav />
          <div className="page-details">
            <h1>William Deverell</h1>
            <h2>{pageName}</h2>
            <p>
              The future home of my various noodlings. Mostly, but not
              exclusively, about my books.
            </p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container" pagename={pageName}>
          <h2>{posts.nodes[0].title}</h2>
          <PortableText blocks={posts.nodes[0]._rawBody} />
          <Link to="/">&larr; back to home</Link>
        </div>
      </div>
    </>
  );
};

export default Blog;

export const query = graphql`
  query AllSanityPost {
    posts: allSanityPost {
      nodes {
        title
        author {
          name
        }
        mainImage {
          asset {
            url
            path
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawBody
      }
    }
  }
`;
