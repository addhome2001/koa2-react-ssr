import path from 'path';
import CSRF from 'koa-csrf';
import session from 'koa-session';
import convert from 'koa-convert';
import etag from 'koa-etag';
import conditional from 'koa-conditional-get';
import onerror from 'koa-onerror';
import views from 'koa-views';
import logger from 'koa-logger';
import body from 'koa-bodyparser';
import passport from 'koa-passport';
import koaStatic from 'koa-static-server';

import auth from './config/passport';

module.exports = (app) => {
  app.keys = ['secret1', 'secret2', 'secret3'];

  // logger
  app.use(logger());

  // view engine
  app.use(views(path.resolve(__dirname, 'views'), { extension: 'ejs' }));

  // static
  app.use(koaStatic({
    rootDir: path.resolve(__dirname, 'static'),
  }));

  // passport
  app.use(passport.initialize());
  app.use(passport.session());
  auth(passport);

  app.use(convert(session(app)));
  app.use(conditional());
  app.use(etag());
  app.use(body());

  app.use(async (ctx, next) => {
    ctx.body = ctx.request.body;
    await next();
  });

  app.use(new CSRF());

  onerror(app);
};
