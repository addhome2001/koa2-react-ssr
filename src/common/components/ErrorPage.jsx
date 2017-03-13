import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () =>
  <div>
    <p className="alert alert-danger">Invalid Username or Password</p>
    <Link className="btn btn-default" Link to="/login">Login Again</Link>
  </div>;

export default ErrorPage;
