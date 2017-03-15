import React from 'react';
import { Link } from 'react-router';
import { btn } from '../css';

const Home = () =>
  <div>
    <Link { ...btn } to="/login">
      Login
    </Link>
    <Link { ...btn } to="/about" >
      About
    </Link>
  </div>;

export default Home;
