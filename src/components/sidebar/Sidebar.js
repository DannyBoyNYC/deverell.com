import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { SidebarStyles } from './styles';

import Nav from '../Nav';

const Sidebar = ({ contentType, bookCover }) => (
  <div className="sidebar">
    <div className="sidebar-container">
      <Nav />
      <div className="page-details">
        <h1>William Deverell</h1>
        <h2 className="side-subhead">~ {contentType} ~</h2>
        {contentType === 'novel' && (
          <div style={{ marginTop: '2rem' }}>
            <Img
              fluid={bookCover.mainImage.asset.fluid}
              alt={bookCover.mainImage.alt}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  contentType: PropTypes.string,
  bookCover: PropTypes.object,
};

export default Sidebar;
