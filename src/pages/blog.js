import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SidebarMainPages } from '../components/sidebar';

import HomeLink from '../components/link/Link';
import PortableText from '../components/portableText';

const Blog = ({ data: { postPreviews } }) => {
  const header = 'blog posts';
  const blurb = {
    block: `The future home of my various noodlings. Mostly, but not
    exclusively, about my books.`,
  };
  return (
    <>
      <SidebarMainPages header={header} blurb={blurb} />
      <div className="main">
        <div className="container">
          {postPreviews.nodes.map((node) => (
            <div key={node.id}>
              <Img
                fluid={node.mainImage.asset.fluid}
                alt={node.mainImage.alt}
              />
              <p className="small">{node.publishedAt}</p>

              <h2>
                <Link to={`/blog/${node.slug.current}`}>{node.title}</Link>
              </h2>
              <PortableText blocks={node._rawExcerpt} />
            </div>
          ))}
          <HomeLink hrefLink="/">&larr; back to home</HomeLink>
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
        mainImage {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        publishedAt(formatString: "MMMM Do YYYY")
        _rawExcerpt
      }
    }
  }
`;
