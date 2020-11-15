import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { SidebarMainPages } from '../components/sidebar';
import HomeLink from '../components/link/Link';
import PortableText from '../components/portableText';

import '../styles/styles.css';

function HomePage({ data: { posts } }) {
  const { nodes } = posts;
  const header = 'Welcome';
  const blurb = {
    block: `to the website of William Deverell, Canadian novelist and winner of the Dashiell Hammett Award for Literary Excellence in North American Crime Writing`,
  };

  return (
    <>
      <SidebarMainPages header={header} blurb={blurb} />
      <div className="main">
        <div className="container">
          {nodes.map((node) => (
            <div key={node.id}>
              <p className="small">
                {format(new Date(node.publishedAt), 'MMMM d, yyyy')}
              </p>
              <h2>
                <Link to={`/blog/${node.slug.current}`}>{node.title}</Link>
              </h2>
              {node.mainImage && (
                <div
                  className="main-image-container"
                  style={{ marginTop: '1rem' }}
                >
                  <Img
                    fluid={node.mainImage.asset.fluid}
                    alt={node.mainImage.alt}
                  />
                </div>
              )}
              <PortableText blocks={node._rawExcerpt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

HomePage.propTypes = {
  data: PropTypes.object,
};

export default HomePage;

export const HomePageQuery = graphql`
  query AllSanityPost {
    posts: allSanityPost {
      nodes {
        id
        slug {
          current
        }
        title
        publishedAt
        mainImage {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawExcerpt
      }
    }
  }
`;
