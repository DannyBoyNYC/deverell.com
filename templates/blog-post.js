import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import SEO from "../components/seo";
import Img from 'gatsby-image';
// import { toPlainText } from '../src/lib/helpers';

import { SidebarPosts } from '../src/components/sidebar';
import HomeLink from '../src/components/link/Link';
import PortableText from '../src/components/portableText';

const BlogPostTemplate = (props) => {
  const {
    data: { sanityPost },
  } = props;
  return (
    <>
      <SidebarPosts
        contentType="blogPost"
        header="blog post"
        blurb={sanityPost._rawExcerpt}
        // blurb={toPlainText(sanityPost._rawExcerpt)}
      />
      <div className="main">
        <div className="container">
          <Img
            fluid={sanityPost.mainImage.asset.fluid}
            alt={sanityPost.mainImage.alt}
          />
          <p className="small">{sanityPost.publishedAt}</p>
          <h2>{sanityPost.title}</h2>
          <PortableText blocks={sanityPost._rawBody} />
          <HomeLink />
        </div>
      </div>
    </>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostById($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
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
      publishedAt(formatString: "MMMM Do, yyyy")
      _rawExcerpt
      _rawBody
    }
  }
`;
