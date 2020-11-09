import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'g2f5nmlg',
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});
