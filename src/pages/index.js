import React from "react";
import { graphql } from "gatsby";
// import { Link } from 'gatsby';
// import sanityClient from '../../sanityClient'
// import Img from 'gatsby-image'
import stung from "../../img/stung-full-cover.png";
import Bio from "../components/Bio";
import "../styles/styles.css";

export default function HomePage({ data: { posts } }) {
  console.log("posts ", posts.nodes);
  // console.log('filtered ', posts.nodes.filter( (item) => item.title === 'Biography') )
  return (
    <>
      <marquee behavior="" direction="">
        My website is currently offline to permit some overdue updating and
        modernizing. My Web mechanic is working on it as I compose this note.
        (And no, it has not been hacked, it was just feeling its age.)
      </marquee>

      <h1>William Deverell</h1>
      
      <h2>My latest — due in March, 2021</h2>
      <img src={stung} alt='stung cover' style={{ maxWidth: '820px' }} />
      <p>Arthur Beauchamp takes on the most explosive trial of his career: the defence of seven boisterous environmentalists accused of sabotaging a plant in Ontario that pumps out a pesticide that has led to the mass deaths of honeybees. The story zigzags between Toronto, where the trial takes place, and Arthur's West Coast island home where he finds himself arrested for fighting his own environmental cause: the threatened destruction of a popular park. The Toronto trial concludes with a tense, hang-by-the-fingernails jury verdict. The story is told from points of view of Arthur and a vibrant young woman activist and a tough, cynical OPP Inspector. Throughout, Arthur struggles to save his marriage.</p>

      <Bio bio={posts.nodes.filter((post) => post.title === 'Biography')} />

      <h2>Books</h2>
      <div className="booklist">
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
      </div>
    </>
  );
}

export const query = graphql`
  query AllSanityPost {
    posts: allSanityPost {
      nodes {
        title
        author {
          name
        }
        mainImage {
          asset {
            url
            path
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawBody
      }
    }
  }
`;
