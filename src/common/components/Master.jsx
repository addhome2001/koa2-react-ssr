import React, { PropTypes } from 'react';

const Master = ({ children }) =>
  <div className="container">
    <div className="jumbotron text-center clearfix">
      <h1><span className="fa fa-lock" />Node Authentication</h1>
      { children }
    </div>
  </div>;

Master.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Master;
