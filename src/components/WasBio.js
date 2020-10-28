import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import PortableText from './portableText';

export function imageUrlFor(source) {
  return imageUrlBuilder({
    projectId: 'g2f5nmlg',
    dataset: 'production',
  }).image(source);
}

const Bio = ({ bio }) => (
  <div className="bio">
    <h2>{bio[0].title}</h2>
    <PortableText blocks={bio[0]._rawBody} />
  </div>
);

export default Bio;
