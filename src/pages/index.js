import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import HomeLink from '../components/link/Link';
import { SidebarMainPages } from '../components/sidebar';
import PortableText from '../components/portableText';

import '../styles/styles.css';

const PostIntroSC = styled.div`
  margin-bottom: 3rem;
`;

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
            <PostIntroSC key={node.id}>
              <p className="small">{node.publishedAt}</p>
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
              <HomeLink hrefLink="/books/">read more &rarr; </HomeLink>
            </PostIntroSC>
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
        publishedAt(formatString: "MMMM Do YYYY")
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
