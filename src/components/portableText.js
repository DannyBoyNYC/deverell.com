import React from 'react';
// import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react';
import sanityClient from '../../sanityClient';
import serializers from './serializers';

// const PortableText = ({blocks}) => (
//   <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
// )

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

export default PortableText;
