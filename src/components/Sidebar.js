import React from 'react';

export default function HomeSidebar({ pageName }) {
  return (
    <div className="page-details">
      {pageName === 'home' && (
        <>
          <h1>William Deverell</h1>
          <h2>{pageName}</h2>
          <p>
            The official website of William Deverell, Winner of the Dashiell
            Hammett Award for Literary Excellence in North American Crime
            Writing
          </p>
        </>
      )}
      {pageName === 'blog' && (
        <>
          <h1>{pageName}</h1>
          <p>
            My various noodlings. Mostly, but not exclusively, about my books.
          </p>
        </>
      )}
      {pageName === 'books' && (
        <>
          <h1>{pageName}</h1>
          <p>
            A list of all publications with links to the publisher's web site.
          </p>
        </>
      )}
      {pageName === 'biography' && (
        <>
          <h1>{pageName}</h1>
          <p>
            The official website of William Deverell, Winner of the Dashiell
            Hammett Award for Literary Excellence in North American Crime
            Writing
          </p>
        </>
      )}
    </div>
  );
}
