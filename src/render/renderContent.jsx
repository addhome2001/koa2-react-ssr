import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStaticOptimized } from 'glamor-server';
import { RouterContext } from 'react-router';

export default renderProps =>
  renderStaticOptimized(() =>
    renderToString(
      <RouterContext { ...renderProps } />,
    ),
  );
