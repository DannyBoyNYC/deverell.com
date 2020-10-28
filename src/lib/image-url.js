import imageUrlBuilder from '@sanity/image-url';

export function imageUrlFor(source) {
  // PURPLE process.env
  return imageUrlBuilder({
    projectId: 'g2f5nmlg',
    dataset: 'production',
  }).image(source);
}
