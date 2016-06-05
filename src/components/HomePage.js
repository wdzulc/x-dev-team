import React from 'react';
import {Link} from 'react-router';
import ChartPage from './ChartPage.js';

const HomePage = () => {
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
        <ChartPage/>
      </ol>
    </div>
  );
};

export default HomePage;
