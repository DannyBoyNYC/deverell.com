import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Nav from '../components/Nav';
// import PortableText from '../components/portableText';

const SingleBook = ({ book }) => {
  const { title, link } = book;
  return (
    <div>
      <Link to={link} target="_blank">
        <h2 className="">{title}</h2>
        <Img fluid={book.image.asset.fluid} alt={title} />
      </Link>
    </div>
  );
};

const Books = ({ data: { books } }) => (
  <>
    <div className="sidebar">
      <div className="sidebar-container">
        <Nav />
        <div className="page-details">
          <h1>Books by William Deverell</h1>
          {/* <h2>biography</h2> */}
          <p>Read more about these books at the publisher's website.</p>
        </div>
      </div>
    </div>
    <div className="main ">
      <div className="container booklist">
        {books.nodes.map((book) => (
          <SingleBook book={book} />
        ))}

        <Link to="/">&larr; back to home</Link>
      </div>
    </div>
  </>
);

Books.propTypes = {
  data: PropTypes.object,
};

SingleBook.propTypes = {
  book: PropTypes.object,
};

export default Books;

export const query = graphql`
  query Books {
    books: allSanityBook {
      nodes {
        id
        title
        slug {
          current
        }
        # pubdate
        link
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
