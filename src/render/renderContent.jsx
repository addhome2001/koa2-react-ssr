import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';

export default renderProps =>
  renderToString(
    <RouterContext { ...renderProps } />,
  );
