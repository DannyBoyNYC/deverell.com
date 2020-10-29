export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Book Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'link',
      title: 'Publishers Link',
      type: 'string',
      description: 'A link to the book on ECW.',
    },
    {
      name: 'pubdate',
      title: 'Publication Date',
      type: 'date',
      options: {
        dateFormat: 'MMM-YYYY',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
};
