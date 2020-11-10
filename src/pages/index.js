import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Nav from '../components/Nav';
import HomeLink from '../components/link/Link';
import PortableText from '../components/portableText';

import '../styles/styles.css';

function HomePage({ data: { posts } }) {
  const { nodes } = posts;

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <Nav />
          <div className="page-details">
            <h1>Welcome</h1>
            <h2 className="side-subhead">~ nota bene ~</h2>
            <p>
              My website is currently being re-developed to permit some overdue
              updating and modernizing. My Web mechanic is working on it as I
              compose this note. (And no, it has not been hacked, it was just
              feeling its age.)
            </p>
          </div>
        </div>
      </div>

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
          <HomeLink />
          <br />
          {/* <pre>{JSON.stringify(nodes, null, 2)}</pre> */}q
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
          caption
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
