import React from 'react';
import { match } from 'react-router';
import renderPage from './renderPage';
import routes from '../routes';

export default async (ctx) => {
   const initialState = {
     csrf: ctx.csrf
   };
   match({ routes: routes(initialState), location: ctx.url }, async (error, redirectLocation, renderProps) => {
        if (error) {
          ctx.throw(500, error.message);
        } else if (redirectLocation) {
          ctx.status = 302;
          ctx.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {

          try {
              const { reactContent, preloadedState } = await renderPage(renderProps);
              ctx.status = 200;
              ctx.state.reactContent = reactContent;
              ctx.state.preloadedState = preloadedState;
          } catch (e) {
              console.log(e);
          }

        } else {
          ctx.throw(404, 'Not found');
        }
      });

      await ctx.render('index', {
        reactContent: ctx.state.reactContent,
        preloadedState: ctx.state.preloadedState
      });
}
