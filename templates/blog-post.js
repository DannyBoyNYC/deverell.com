import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
// import SEO from "../components/seo";
import Sidebar from '../src/components/sidebar/Sidebar';
import HomeLink from '../src/components/link/Link';
import PortableText from '../src/components/portableText';

const BlogPostTemplate = (props) => {
  const {
    data: { sanityPost },
  } = props;
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="container">
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
      publishedAt
      # _rawExcerpt
      _rawBody
    }
  }
`;
