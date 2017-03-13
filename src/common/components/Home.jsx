import React from 'react';
import { Link } from 'react-router';

const Home = () =>
  <div>
    <Link to="/login" className="btn btn-default">
      Local Login
    </Link>
    &nbsp;
    <Link to="/about" className="btn btn-default">
      About
    </Link>
  </div>;

export default Home;
