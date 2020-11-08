// const { isFuture } = require('date-fns');
// const { format } = require('date-fns');

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { Reporter } = require('gatsby');

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  // const blogPost = path.resolve(`./templates/blog-post.js`);
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
    }
  `);

  if (result.errors) {
    // throw result.errors;
    reporter.panic('failed to create pages', result.errors);
  }

  const { nodes } = result.data.posts;

  nodes.forEach((node) => {
    const { slug, id } = node;
    createPage({
      path: `/blog/${slug.current}`,
      component: require.resolve('./templates/blog-post.js'),
      context: {
        id,
      },
    });
  });
};

// exports.createPages = async ({ graphql, actions }) => {
//   await createBlogPostPages(graphql, actions);
// };
