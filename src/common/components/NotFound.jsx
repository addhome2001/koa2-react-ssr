import React from 'react';
import { IndexLink } from 'react-router';

const NotFound = () =>
  <div>
    <p className="alert alert-warning">Not Found Page</p>
    <IndexLink className="btn btn-default" Link to="/">Home</IndexLink >
  </div>;

export default NotFound;
