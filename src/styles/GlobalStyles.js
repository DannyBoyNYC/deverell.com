import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --eelt-gray: #eee;
    --elt-gray: #ccc;
    --lt-gray: #999;
    --dk-gray: #666;
    --edk-gray: #333;
    --background-gray: #e6e6e6;
    --red: #FF4949;
    --black: #222222;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --green: #bada55;
    --blue: #205e80;
  }

  body {
    font-size: 1rem;
    line-height: 1.4;
    background-color: var(--black);
  }

  img {
    max-width: 100%;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

    /* .gatsby-image-wrapper img[src*=base64\\,] {
      image-rendering: -moz-crisp-edges;
      image-rendering: pixelated;
    }  */
`;

export default GlobalStyles;
