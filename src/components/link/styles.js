import styled from 'styled-components';
import { Link } from 'gatsby';

export const LinkSC = styled(Link)`
  display: inline-block;
  color: var(--eelt-gray);
  font-weight: 500;
  font-size: 0.85rem;
  display: inline-block;
  background-color: var(--blue);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  &:hover {
    text-decoration: none;
  }
`;
