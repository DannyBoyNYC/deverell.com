import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LinkSC = styled.div`
  display: inline-block;
  margin: 1rem 0;
  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    background-color: var(--blue);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
`;

const HomeLink = () => {
  return (
    <LinkSC>
      <Link to="/">&larr; back to home</Link>
    </LinkSC>
  );
};

export default HomeLink;
