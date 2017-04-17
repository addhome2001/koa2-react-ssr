import React from 'react';
import PropTypes from 'prop-types';
import { vars } from 'glamor-react';
import { container, content } from '../css';

const Master = ({ children, vars: { backgroundColor, color } }) =>
  <div { ...container({ backgroundColor }) }>
    <div { ...content({ color }) }>
      <p className="title">React Server Render</p>
      { children }
    </div>
  </div>;

Master.propTypes = {
  children: PropTypes.element.isRequired,
};

export default vars({ backgroundColor: '#1588bc', color: '#fff' })(Master);
