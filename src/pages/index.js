import React from 'react';
import { Link } from 'gatsby';
import stung from '../../img/stung-full-cover.png';
import Nav from '../components/Nav';
import '../styles/styles.css';

export default function HomePage() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <Nav />
          <div className="page-details">
            <h1>William Deverell</h1>
            <h2>Please note</h2>
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
          <h2>
            <Link to="/blog/">The Art of the Memoir</Link>
          </h2>
          <p>
            As I reorganize my Blog, this seems an opportune time to revise and
            post a short short story published a while ago by Maclean's Magazine
            in a tongue-in-cheek series titled <em>Trump’s Last Chapter</em>.
            Several Canadian authors were asked to envision Donald Trump's
            downfall.
            <br />
            <Link to="/blog/">This is my take on it...</Link>
          </p>

          <hr />

          <a href="https://ecwpress.com/products/stung">
            <h2>My Latest</h2>
          </a>
          <h3>due in March, 2021</h3>
          <a href="https://ecwpress.com/products/stung">
            <img
              src={stung}
              alt="stung cover"
              style={{
                border: '1px solid #999',
                marginTop: '1rem',
              }}
            />
          </a>

          <p>
            Arthur Beauchamp takes on the most explosive trial of his career:
            the defence of seven boisterous environmentalists accused of
            sabotaging a plant in Ontario that pumps out a pesticide that has
            led to the mass deaths of honeybees. The story zigzags between
            Toronto, where the trial takes place, and Arthur's West Coast island
            home where he finds himself arrested for fighting his own
            environmental cause: the threatened destruction of a popular park.
            The Toronto trial concludes with a tense, hang-by-the-fingernails
            jury verdict. The story is told from points of view of Arthur and a
            vibrant young woman activist and a tough, cynical OPP Inspector.
            Throughout, Arthur struggles to save his marriage.
          </p>

          <hr />
          <h2>All Publications</h2>
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
        </div>
      </div>
    </>
  );
}
