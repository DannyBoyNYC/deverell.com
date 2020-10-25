import React from "react";
import { graphql, Link } from "gatsby";

import Bio from "../components/Bio";

const About = () => (
  <>
    {/* <Bio bio={posts.nodes.filter((post) => post.title === 'Biography')} /> */}
    <Link to="/">&larr; back to home</Link>
  </>
);

// export const query = graphql`
//   query AllSanityPost {
//     posts: allSanityPost {
//       nodes {
//         title
//         author {
//           name
//         }
//         mainImage {
//           asset {
//             url
//             path
//             fluid(maxWidth: 300) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         _rawBody
//       }
//     }
//   }
// `;

export default About;
