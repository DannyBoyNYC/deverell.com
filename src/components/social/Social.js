import React from 'react';
import styled from 'styled-components';
import {
  FaRegEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

const mailToUrl = `mailto:william.deverell@gmail.com?Subject=Hello`;
const twitterUrl = `https://twitter.com/BillDeverell`;
const facebookURL = `https://facebook.com/BillDeverellNovelist`;
const instagramURL = `https://instagram.com/billdev`;

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  li {
    padding: 1rem;
  }
`;

const Social = () => (
  <>
    <Wrapper>
      <li>
        <a href={mailToUrl} target="_top" title="Email William Deverell">
          <FaRegEnvelope />
        </a>
      </li>
      <li>
        <a href={twitterUrl} target="_top" title=" William Deverell on Twitter">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href={facebookURL}
          target="_top"
          title=" William Deverell on Facebook"
        >
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a
          href={instagramURL}
          target="_top"
          title=" William Deverell on Instagram"
        >
          <FaInstagram />
        </a>
      </li>
    </Wrapper>
  </>
);

export default Social;
