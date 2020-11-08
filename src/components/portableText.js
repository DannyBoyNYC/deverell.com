import React from 'react';
import PropTypes from 'prop-types';
import BasePortableText from '@sanity/block-content-to-react';
import sanityClient from '../../sanityClient';
import serializers from './serializers';

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    {...sanityClient}
    // PURPLE process.env
    projectId="g2f5nmlg"
    dataset="production"
  />
);

PortableText.propTypes = {
  blocks: PropTypes.array,
};

export default PortableText;
