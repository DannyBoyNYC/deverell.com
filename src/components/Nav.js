import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.5rem;
    justify-items: center;
  }
  li {
    font-size: 0.9em;
    width: 90%;

    & .activeStyles {
      background: var(--blue);
      color: var(--eelt-gray);
      border-radius: 0 0 4px 4px;
    }
    a {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      display: block;
      border-radius: 0 0 2px 2px;
      padding: 6em 0.5em 0.5em 0.5em;
      color: var(--lt-gray);
      text-decoration: none;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/" activeClassName="activeStyles">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog/" activeClassName="activeStyles" partiallyActive>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/books/" activeClassName="activeStyles" partiallyActive>
            Books
          </Link>
        </li>
        <li>
          <Link to="/biography/" activeClassName="activeStyles">
            Biography
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
