import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { SpecialLink } from '../components/link';
import { SidebarMainPages } from '../components/sidebar';
import PortableText from '../components/portableText';

import '../styles/styles.css';

const PostIntroSC = styled.div`
  .main-image-container {
    margin-top: 1.5rem;
  }
  @media (min-width: 1266px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'date date date date date'
      'headLine headLine headLine headLine headLine'
      'img img content content content'
      '. . . . btn';
    .small {
      grid-area: date;
    }
    h2 {
      grid-area: headLine;
    }

    .main-image-container {
      grid-area: img;
    }
    .main-image-container + p,
    .main-image-container + div {
      grid-area: content;
    }
    p + a,
    div + a {
      grid-area: btn;
      text-align: center;
    }
  }
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
              {node.mainImage.asset && (
                <div className="main-image-container">
                  {node.mainImage.asset.fluid ? (
                    <Img
                      fluid={node.mainImage.asset.fluid}
                      alt={node.mainImage.alt}
                    />
                  ) : (
                    ''
                  )}
                </div>
              )}
              <PortableText blocks={node._rawExcerpt} />
              <SpecialLink hrefLink={`/blog/${node.slug.current}`}>
                read more &rarr;
              </SpecialLink>
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
    posts: allSanityPost(
      filter: { homepage: { eq: true } }
      sort: { fields: [publishedAt], order: DESC }
    ) {
      nodes {
        id
        slug {
          current
        }
        title
        homepage
        publishedAt(formatString: "MMMM Do YYYY")
        mainImage {
          alt
          asset {
            # url
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
