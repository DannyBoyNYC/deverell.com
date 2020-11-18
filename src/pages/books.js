import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { SidebarMainPages } from '../components/sidebar';
// import { SpecialLink } from '../components/link';
import SingleBook from '../components/Book';

const BookGridSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  grid-auto-rows: auto auto 300px;
`;

const Books = ({ data: { books } }) => {
  const header = 'Books in print';
  const blurb = {
    block: `Novels by William Deverell. Select a title to learn more.`,
  };
  return (
    <>
      <SidebarMainPages header={header} blurb={blurb} />
      <div className="main ">
        <div className="container">
          <BookGridSC>
            {books.nodes.map((book) => (
              <SingleBook key={book.id} book={book} />
            ))}
          </BookGridSC>
        </div>
      </div>
    </>
  );
};

Books.propTypes = {
  data: PropTypes.object,
};

export default Books;

export const query = graphql`
  query Books {
    books: allSanityBook(sort: { fields: [pubdate], order: DESC }) {
      nodes {
        id
        title
        slug {
          current
        }
        pubdate(formatString: "YYYY")
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
