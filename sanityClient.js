import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'g2f5nmlg',
  dataset: 'production',
  useCdn: true,
});
