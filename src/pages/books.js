import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Nav from '../components/Nav';
import HomeLink from '../components/link/Link';
import SingleBook from '../components/Book';

const BookGridSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  grid-auto-rows: auto auto 300px;
`;

const Books = ({ data: { books } }) => (
  <>
    <div className="sidebar">
      <div className="sidebar-container">
        <Nav />
        <div className="page-details">
          <h1>Novels</h1>
          <h2 className="side-subhead">~ listing ~</h2>
          <p>Select a title to learn more.</p>
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
        <HomeLink />
      </div>
    </div>
  </>
);

Books.propTypes = {
  data: PropTypes.object,
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
        mainImage {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
