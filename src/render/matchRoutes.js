/* eslint-disable no-console */
import { match } from 'react-router';
import renderContent from './renderStatic';
import routes from '../common/routes';

export default function (ctx) {
  const initialState = {
    csrf: ctx.csrf || '',
    user: ctx.state.user || {},
  };
  let content;
  match({ routes: routes(initialState), location: ctx.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        ctx.throw(500, error.message);
      } else if (redirectLocation) {
        ctx.status = 302;
        ctx.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        try {
          content = renderContent(renderProps);
        } catch (e) {
          console.log(e);
        }
      } else {
        ctx.throw(404, 'Not found');
      }
    });
  return content;
}
