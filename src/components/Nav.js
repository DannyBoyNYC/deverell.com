import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
    justify-items: center;
  }
  li {
    font-size: 0.9em;
    width: 100%;
    & .activeStyles {
      background: white;
      color: var(--black);
    }
    a {
      display: block;
      padding: 6em 0.5em 0.5em 0.5em;
      color: white;
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
          <Link to="/blog/" activeClassName="activeStyles">
            blog
          </Link>
        </li>
        {/* <li>
          <Link to="/books/" activeClassName="activeStyles">
            books
          </Link>
        </li> */}
        <li>
          <Link to="/biography/" activeClassName="activeStyles">
            biography
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
