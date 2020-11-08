import React from 'react';
import Nav from '../Nav';

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-container">
      <Nav />
      <div className="page-details">
        <h1>William Deverell</h1>
        <h2 className="side-subhead">~ article ~</h2>
        {/* <p>
          The future home of my various noodlings. Mostly, but not exclusively,
          about my books.
        </p> */}
      </div>
    </div>
  </div>
);

export default Sidebar;
