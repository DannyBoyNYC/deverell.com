import React from 'react';
// import { Link } from 'gatsby';
import book from '../cover.jpg';
import '../styles/styles.css';

export default () => (
  <>
    <h1>To my fans and friends,</h1>
    <p>Sorry!</p>
    <p>
      My website is currently offline to permit some overdue updating and
      modernizing. My Web mechanic is working on it as I compose this note. (And
      no, it has not been hacked, it was just feeling its age.)
    </p>
    <a href="https://ecwpress.com/products/stung">
      <img src={book} alt="Stung book cover" width="240" />
    </a>
    <p>
      When the site is up again, I'll have some gladdening (especially for me)
      news about my upcoming courtroom drama starring Arthur Beauchamp: STUNG.
      Sex, drugs and rock'n'roll. Literally.
    </p>
    <p>Until we meet again, stay happy and keep well, my friends.</p>
    Bill Deverell
  </>
);
