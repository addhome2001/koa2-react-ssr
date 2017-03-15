/* eslint-disable no-console */
import { match } from 'react-router';
import renderContent from './renderContent';
import routes from '../common/routes';

export default async (ctx) => {
  const initialState = {
    csrf: ctx.csrf || '',
    user: ctx.passport.user || {},
  };
  match({ routes: routes(initialState), location: ctx.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        ctx.throw(500, error.message);
      } else if (redirectLocation) {
        ctx.status = 302;
        ctx.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        try {
          const { html, css } = renderContent(renderProps);
          ctx.status = 200;
          ctx.state = {
            reactContent: html,
            css,
          };
        } catch (e) {
          console.log(e);
        }
      } else {
        ctx.throw(404, 'Not found');
      }
    });
  await ctx.render('index', ctx.state);
};
