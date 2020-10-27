import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../sanityClient';
// import clientConfig from "../../client-config";

export function imageUrlFor(source) {
  return imageUrlBuilder({
    projectId: 'g2f5nmlg',
    dataset: 'production',
  }).image(source);
}

// === serializers
export const serializer = {
  types: {
    mainImage: (props) => (
      <img src={imageUrlFor(props.node.asset)} alt={props.node.alt} />
    ),
  },
};
// ===

export const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializer}
    {...sanityClient}
    projectId="g2f5nmlg"
    dataset="production"
  />
);

const Bio = ({ bio }) => (
  <div className="bio">
    <h2>{bio[0].title}</h2>
    <PortableText blocks={bio[0]._rawBody} />
  </div>
);

export default Bio;
