import React from 'react';
import PropTypes from 'prop-types';

import { LinkSC } from './styles';

const LinkButton = ({ children, hrefLink }) => (
  <LinkSC to={hrefLink}> {children}</LinkSC>
);

LinkButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  hrefLink: PropTypes.string,
};

export default LinkButton;
