import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import PortableText from '../portableText';
import { SocialMedia } from '../social';

import Nav from '../Nav';

import { SidebarSC } from './styles';

const Sidebar = ({ bookCover, blurb, header, variation }) => (
  <SidebarSC>
    <div className="sidebar-container">
      <Nav />
      <div className="page-details">
        <h1>William Deverell</h1>
        <h2 className="side-subhead">~&nbsp;{header}&nbsp;~</h2>
        {variation === 'mainPages' && <p>{blurb.block}</p>}
        {variation === 'posts' && <PortableText blocks={blurb} />}
        {variation === 'books' && (
          <div className="book-container">
            <Img
              fluid={bookCover.mainImage.asset.fluid}
              alt={bookCover.mainImage.alt}
            />
          </div>
        )}
      </div>
      <SocialMedia />
    </div>
  </SidebarSC>
);

Sidebar.propTypes = {
  bookCover: PropTypes.object,
  blurb: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  header: PropTypes.string,
  variation: PropTypes.string,
};

export default Sidebar;
