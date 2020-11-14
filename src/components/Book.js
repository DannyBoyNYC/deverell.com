import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const BookDivSC = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 0.5rem;
  h2,
  p {
    margin: 0;
  }
  h2 {
      color: var(--blue);
      font-size: 1.75rem;
    }
  }
`;

const SingleBook = ({ book }) => {
  const { title, link, pubdate, mainImage, slug } = book;

  const date = new Date(pubdate);
  const pubYear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  }).format(date);

  return (
    <BookDivSC>
      <h2>
        <Link to={`/books/${slug.current}`}>{title}</Link>
      </h2>

      <p className="small">Published in {format(new Date(pubYear), 'yyyy')}</p>
      <Link to={`/books/${slug.current}`}>
        <Img fluid={mainImage.asset.fluid} alt={mainImage.alt} />
      </Link>

      <a href={link} target="_blank" rel="noreferrer">
        Learn more
      </a>
    </BookDivSC>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object,
};

export default SingleBook;
