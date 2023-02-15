import React from 'react';

const Home = () => {
  return (
    <div className='home-page'>
      <h2>WELCOME!</h2>
      <div>
  
        <p>
          Since 2009, we’ve helped thousands of busy people around the world get
          in shape and make permanent progress. No guilt or shame, just results!
        </p>

        <p>
          We build custom workout programs, provide nutritional guidance,
          support, and worldwide accountability in your pocket.
        </p>

        <p>
          In addition to our training and courses, we produce free tools,
          downloadable guides, and tactical articles that we send to over
          300,000 rebels on a regular basis.
        </p>
      </div>
      <div className='featured'>
        <h3>AS FEATURED IN</h3>
        <ul>
          <li>THE NEW YORK TIMES</li>
          <li>CNET</li>
          <li>THE WALL STREET JOURNAL</li>
          <li>THE WASHINGTON POST</li>
          <li>USA TODAY</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
