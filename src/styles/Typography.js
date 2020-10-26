import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/placardmtstd-cond-webfont.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Placard;
    src: url(${font});
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
  }
  h1 {
    font-family: Placard, arial, sans-serif;
    font-size: 3.8em;
    line-height: 1;
    text-transform: uppercase;
    font-weight: normal;
    margin-top:0;
    margin-bottom:0;
    padding-top:0.3rem;
    padding-bottom:0.4rem;
  }
  h2 {
    font-size: 2rem;
  }
  a {
    color: var(--black);
    text-decoration: none;
    text-decoration-color: var(--grey);
    /* Chrome renders this weird with this font, so we turn it off */
    /* text-decoration-skip-ink: none; */
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

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
