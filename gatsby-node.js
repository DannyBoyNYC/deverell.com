exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          title
          slug {
            current
          }
          publishedAt
        }
      }
      books: allSanityBook {
        nodes {
          id
          title
          slug {
            current
          }
          pubdate
          link
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create pages', result.errors);
  }

  const { nodes: posts } = result.data.posts;
  const { nodes: books } = result.data.books;

  posts.forEach((post) => {
    const { slug, id } = post;
    createPage({
      path: `/blog/${slug.current}`,
      component: require.resolve('./templates/blog-post.js'),
      context: {
        id,
      },
    });
  });

  books.forEach((book) => {
    const { slug, id } = book;
    createPage({
      path: `/book/${slug.current}`,
      component: require.resolve('./templates/book.js'),
      context: {
        id,
      },
    });
  });
};
