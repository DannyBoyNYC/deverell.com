import { format } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import stung from '../../img/stung-full-cover.png';

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
              {node.image && (
                <div
                  className="main-image-container"
                  style={{ marginTop: '1rem' }}
                >
                  <Img fluid={node.image.asset.fluid} />
                </div>
              )}
              <PortableText blocks={node._rawExcerpt} />
            </div>
          ))}

          <HomeLink />
          <br />
          <pre>{JSON.stringify(nodes, null, 2)}</pre>

          <hr />

          {/* <hr />
            <h2>All Publications</h2> */}

          {/* <div className="booklist">
            <a href="https://ecwpress.com/products/stung">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781770415959_c6938034-ab0d-4ddf-ac27-7ebc06588352_1024x1024.jpg?v=1603140835"
                alt="Stung book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/needles">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781550225433_1024x1024.jpeg?v=1479930434"
                alt="Needles book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/whipped">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781770413900_1024x1024.jpg?v=1506901255"
                alt="Whipped book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/april-fool">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781770414082_1024x1024.jpg?v=1491937491"
                alt="April Fool book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/street-legal">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781550226607_1024x1024.jpeg?v=1479931196"
                alt="Street Legal book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/sing-a-worried-song">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781770412453_1024x1024.jpeg?v=1479931067"
                alt="Sing a Worried Song book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/trial-of-passion">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781550225426_1024x1024.jpeg?v=1479932229"
                alt="Trial of Passion book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/dance-of-shiva">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781550226591_1024x1024.jpeg?v=1479931548"
                alt="Dance of Shiva book cover"
              />
            </a>
            <a href="https://ecwpress.com/products/high-crimes">
              <img
                src="https://cdn.shopify.com/s/files/1/0719/2207/products/9781550226973_1024x1024.jpeg?v=1479929821"
                alt="High Crimes book cover"
              />
            </a>
          </div> */}
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
        image {
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
