import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import SEO from "../components/seo";
import Img from 'gatsby-image';
import Sidebar from '../src/components/sidebar/Sidebar';
import HomeLink from '../src/components/link/Link';
import PortableText from '../src/components/portableText';

const BlogPostTemplate = (props) => {
  const {
    data: { sanityPost },
  } = props;
  return (
    <>
      <Sidebar contentType="blog post" />
      <div className="main">
        <div className="container">
          <Img
            fluid={sanityPost.mainImage.asset.fluid}
            alt={sanityPost.mainImage.alt}
          />
          <p className="small">
            {format(new Date(sanityPost.publishedAt), 'MMMM d, yyyy')}
          </p>
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
      publishedAt
      # _rawExcerpt
      _rawBody
    }
  }
`;
