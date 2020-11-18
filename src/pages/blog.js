import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { SidebarMainPages } from '../components/sidebar';

import { SpecialLink } from '../components/link';
import PortableText from '../components/portableText';

const PostIntroSC = styled.div`
  margin-bottom: 3.5rem;
  img {
    margin-top: 1rem;
  }
`;

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
            <PostIntroSC key={node.id}>
              <p className="small">{node.publishedAt}</p>
              <h2>
                <Link to={`/blog/${node.slug.current}`}>{node.title}</Link>
              </h2>
              <Img
                fluid={node.mainImage.asset.fluid}
                alt={node.mainImage.alt}
              />
              <PortableText blocks={node._rawExcerpt} />
              <SpecialLink hrefLink={`/blog/${node.slug.current}`}>
                read more &rarr;{' '}
              </SpecialLink>
            </PostIntroSC>
          ))}
          <SpecialLink hrefLink="/">&larr; back to home</SpecialLink>
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
