import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  body {
    font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif; 
    color: var(--black);
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5;
  }
  p, li {
    letter-spacing: 0.5px;
    font-size: 1.3rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
  }
  h1 {
    font-size: 3rem;
    line-height: 1;
    font-weight: normal;
    margin-top:0;
    margin-bottom:0;
    padding-top:0.3rem;
    padding-bottom:0.4rem;
  }
  h2 {
    font-size: 1.75rem;
    line-height: 1;
    font-weight: normal;
  }
  a {
    color: var(--blue);
    text-decoration: none;
&:hover {
  text-decoration: underline;
}
  }
  h2 {
    text-decoration: none;
    font-weight: normal;
    font-size: 2.25rem;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }
  .small {
    margin: 0;
    margin-bottom: 0.25rem;
    margin-top: 2.5rem;
    font-size: 0.875rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
`;

export default Typography;
