import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../app/app';

module.exports = (app, env) => {

    //routes
    //import koarouter from 'koa-router';
    // const router = koarouter();

    // router.get('/', (ctx) => {
    //         if(!ctx.session.authenticated) {
    //           ctx.body = home;
    //         } else {
    //           ctx.body = '<p>hello world!!</p><a href="/logout">登出</a>';
    //         }
    //       })
    //
    //       .get('/login', (ctx) => {
    //         ctx.session.csrf = ctx.csrf;
    //         ctx.body = form.replace('{{csrf}}', ctx.csrf);
    //       })
    //
    //       .get('/logout', (ctx) => {
    //         if(!ctx.session.authenticated) ctx.throw(303, 'no have token');
    //         ctx.session.authenticated = '';
    //         ctx.status = 303;
    //         ctx.redirect('/login');
    //       })
    //
    //       .post('/login', async (ctx, next) => {
    //         let body = await parse.form(ctx);
    //         if(!body._csrf) ctx.throw(403, 'no token');
    //         if(body.username !== user.username || body.password !== user.password) ctx.throw(400, 'Bad Request');
    //         if(body._csrf !== ctx.session.csrf) ctx.throw(403, 'invalid token');
    //         if(ctx.session.authenticated) ctx.redirect('/');
    //         await next();
    //       }, (ctx) => {
    //         ctx.session.authenticated = true;
    //         ctx.redirect('/');
    //         ctx.status = 303;
    //       });

    // app.use(router.routes())
    //    .use(router.allowedMethods());

    app.use(async (ctx, next) => {
      match({ routes, location: ctx.url }, async (error, redirectLocation, renderProps) => {
        if (error) {
          ctx.throw(500, error.message);
        } else if (redirectLocation) {
          ctx.status = 302;
          ctx.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          
          try {
              ctx.status = 200;
              ctx.state.reactContent = renderToString(<RouterContext {...renderProps} />);
          } catch (e) {
              console.log(e);
          }

        } else {
          ctx.throw(404, 'Not found');
        }
      });
      
      await ctx.render('index', { 
        reactContent: ctx.state.reactContent
      });
      
    });
}
