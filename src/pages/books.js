import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Img from 'gatsby-image';
import Nav from '../components/Nav';
// import PortableText from '../components/portableText';

const BookGridSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 300px;
`;

const BookLinkSC = styled.a`
  text-decoration: none;
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 0.5rem;
  &:hover {
    opacity: 0.7;
  }
  h2,
  p {
    margin: 0;
  }
`;

const SingleBook = ({ book }) => {
  const { title, link, pubdate } = book;

  const date = new Date(pubdate);
  const pubYear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  }).format(date);

  return (
    <BookLinkSC href={link} target="_blank">
      <h2>{title}</h2>
      <p>Published {pubYear}</p>
      <Img fluid={book.image.asset.fluid} alt={title} />
    </BookLinkSC>
  );
};

const Books = ({ data: { books } }) => (
  <>
    <div className="sidebar">
      <div className="sidebar-container">
        <Nav />
        <div className="page-details">
          <h1>Books by William Deverell</h1>
          <p>
            Select a title to read more about these books on the publisher's
            website.
          </p>
        </div>
      </div>
    </div>
    <div className="main ">
      <div className="container">
        <BookGridSC>
          {books.nodes.map((book) => (
            <SingleBook key={book.id} book={book} />
          ))}
        </BookGridSC>
        <div>
          <Link to="/">&larr; back to home</Link>
        </div>
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
        pubdate
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
