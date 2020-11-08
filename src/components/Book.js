import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BookDivSC = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 0.5rem;
  h2,
  p {
    margin: 0;
  }
  a {
    h2 {
      color: var(--blue);
      font-size: 1.75rem;
    }
  }
`;

const SingleBook = ({ book }) => {
  const { title, link, pubdate } = book;

  const date = new Date(pubdate);
  const pubYear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  }).format(date);

  return (
    <BookDivSC>
      <a href={link} target="_blank" rel="noreferrer">
        <h2>{title}</h2>
      </a>
      <p className="small">{format(new Date(pubYear), 'MMMM d, yyyy')}</p>
      <Img fluid={book.image.asset.fluid} alt={title} />
    </BookDivSC>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object,
};

export default SingleBook;
