import React from 'react';
import { Link } from 'react-router';
import { btn, mainText } from '../css';

const ErrorPage = () =>
  <div>
    <p { ...mainText }>Invalid Username or Password</p>
    <Link { ...btn } Link to="/login">Login Again</Link>
  </div>;

export default ErrorPage;
