import React from 'react';
import { IndexLink } from 'react-router';

const About = () =>
  <div>
    <IndexLink className="btn btn-default" Link to="/">Home</IndexLink >
    <p>About</p>
  </div>;

export default About;
