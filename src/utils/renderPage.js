import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import createStore from './createStore';

export default renderProps => {
  const { store, preloadedState } = createStore();
  const reactContent = renderToString(
    <Provider store={ store }>
      <RouterContext {...renderProps}/>
    </Provider>
  );
  return { reactContent, preloadedState }
};
