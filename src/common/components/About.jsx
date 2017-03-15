import React from 'react';
import { IndexLink } from 'react-router';
import { btn, mainText } from '../css';

const About = () =>
  <div>
    <p { ...mainText }>About</p>
    <IndexLink { ...btn } Link to="/">Home</IndexLink >
  </div>;

export default About;
