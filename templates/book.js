import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import SEO from "../components/seo";
import { SidebarBooks } from '../src/components/sidebar';
import { SpecialLink } from '../src/components/link';
import PortableText from '../src/components/portableText';

const BookTemplate = (props) => {
  const {
    data: { sanityBook },
  } = props;

  return (
    <>
      <SidebarBooks bookCover={sanityBook} header={sanityBook.title} />
      <div className="main">
        <div className="container">
          <p className="small">Published {sanityBook.pubdate}</p>
          <h2>{sanityBook.title}</h2>
          <PortableText blocks={sanityBook._rawBody} />
          <p>
            <a href={sanityBook.link} target="_blank" rel="noreferrer nofollow">
              Learn more and purchase on the publisher's site
            </a>
          </p>
          <SpecialLink hrefLink="/books/">&larr; all books</SpecialLink>
        </div>
      </div>
    </>
  );
};

BookTemplate.propTypes = {
  data: PropTypes.object,
};

export default BookTemplate;

export const query = graphql`
  query BookById($id: String!) {
    sanityBook(id: { eq: $id }) {
      title
      link
      pubdate(formatString: "YYYY")
      mainImage {
        alt
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`;
