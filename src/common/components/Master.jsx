import React, { PropTypes } from 'react';
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
