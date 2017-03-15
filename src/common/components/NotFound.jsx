import React from 'react';
import { IndexLink } from 'react-router';
import { btn, mainText } from '../css';

const NotFound = () =>
  <div>
    <p { ...mainText }>Not Found Page</p>
    <IndexLink { ...btn } to="/">Home</IndexLink >
  </div>;

export default NotFound;
