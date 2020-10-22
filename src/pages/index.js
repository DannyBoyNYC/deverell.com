import React from 'react';
// import { Link } from 'gatsby';
// import headshot from '../img/WilliamDeverell.jpg';
import headshot from '../../img/WilliamDeverell.jpg'
import '../styles/styles.css';

export default () => (
  <>
    <marquee behavior="" direction="">  My website is currently offline to permit some overdue updating and
      modernizing. My Web mechanic is working on it as I compose this note. (And
      no, it has not been hacked, it was just feeling its age.)</marquee>
    <h1>William Deverell</h1>
    <img
      src={headshot}
      alt="William Deverell"
      width="300"
      style={{float: 'left', marginRight: '1rem'}}
    />
    <p>
      While working his way through two degrees at the University of
      Saskatchewan, Bill Deverell was a journalist for seven years, graduating
      in law in 1963. He was a member of the bars of British Columbia, Alberta,
      and the Yukon, and his practice involved both prosecuting and defending,
      civil rights, labour, and environmental law. He is a founding director,
      former president, now honourary director of the B.C. Civil Liberties
      Association.
    </p>
    <p>
      His first novel, <em>Needles</em>, won the $50,000 Seal Prize in l979 and
      the Book of the Year Award in l98l. His subsequent novels include&nbsp;
      <em>High Crimes</em>, <em>Mecca</em>, <em>The Dance of Shiva</em>,&nbsp;
      <em>Platinum Blues</em>, <em>Mindfield</em>,&nbsp;
      <em>Kill All the Lawyers</em>, <em>Street Legal</em>,&nbsp;
      <em>Trial of Passion</em>, <em>Slander</em>, <em>The Laughing Falcon</em>,&nbsp;
      <em>Mind Games</em>, <em>April Fool</em>, <em>Kill All the Judges</em>,&nbsp;
      <em>Snow Job</em>, <em>I'll See You in My Dreams</em>,&nbsp;
      <em>Sing a Worried Song</em>, and <em>Whipped</em>. He is author of the
      true crime book <em>A Life on Trial – the Case of Robert Frisbee</em>,&nbsp;
      based on a celebrated murder trial which he defended. His novels have been
      translated into fourteen languages and sold worldwide. All but two
      continue in print.
    </p>

    <p>
      <em>Trial of Passion</em> won the 1997 Dashiell Hammett award, for
      literary excellence in crime writing in North America, as well as the
      Arthur Ellis prize in crime writing in Canada. It featured the classically
      trained, self-doubting Arthur Beauchamp, a trial lawyer who became
      Deverell’s first series protagonist, in <em>April Fool</em> (also an Ellis
      winner), <em>Kill All the Judges</em> (shortlisted for the Stephen Leacock
      Prize in humour), and <em>Snow Job</em>, a political novel set in Ottawa,
      also a Leacock runner-up. He has been referred to as a national treasure
      by the Toronto Star and received the Best Canadian Crime Writer award at
      the Scene of the Crime Festival in Ontario. In October, 2011, he was
      awarded an honourary doctor of letters from Simon Fraser University and
      five years later received a second honourary D. Litt from the the
      University of Saskatchewan, which holds his archives.
    </p>
    <h2>Read more</h2>
    <div class="booklist">
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
