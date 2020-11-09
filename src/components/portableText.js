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
    projectId={process.env.SANITY_PROJECT_ID}
    dataset={process.env.SANITY_DATASET}
  />
);

PortableText.propTypes = {
  blocks: PropTypes.array,
};

export default PortableText;
