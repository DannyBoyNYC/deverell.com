import imageUrlBuilder from '@sanity/image-url';

export function imageUrlFor(source) {
  // PURPLE process.env
  return imageUrlBuilder({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
  }).image(source);
}
