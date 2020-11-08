import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.25rem;
    justify-items: center;
  }
  li {
    font-size: 0.9em;
    width: 100%;

    & .activeStyles {
      background: var(--blue);
      color: #fff;
      border-radius: 0 0 4px 4px;
    }
    a {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 800;
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
            home
          </Link>
        </li>
        <li>
          <Link to="/blog/" activeClassName="activeStyles" partiallyActive>
            blog
          </Link>
        </li>
        <li>
          <Link to="/books/" activeClassName="activeStyles">
            books
          </Link>
        </li>
        <li>
          <Link to="/biography/" activeClassName="activeStyles">
            biography
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
