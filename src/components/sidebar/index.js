import * as React from 'react';

import Sidebar from './Sidebar';

const SidebarBooks = (props) => <Sidebar {...props} variation="books" />;
const SidebarPosts = (props) => <Sidebar {...props} variation="posts" />;
const SidebarMainPages = (props) => (
  <Sidebar {...props} variation="mainPages" />
);

export { SidebarBooks, SidebarMainPages, SidebarPosts };
