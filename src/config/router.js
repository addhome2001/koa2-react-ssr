import koarouter from 'koa-router';
import routeRender from '../utils/routeRender';
import passport from 'koa-passport';

const router = koarouter();

module.exports = (app) => {
    router.get('/', (ctx, next) => {
            if (!ctx.isAuthenticated()) {
                return next();
            }
              ctx.redirect(`/profile/${ctx.passport.user.username}`);

          }, routeRender)

          .get('/about', routeRender)

          .get('/login',(ctx, next) => {
            if (!ctx.isAuthenticated()) {
                return next();
            }
              ctx.redirect(`/profile/${ctx.passport.user.username}`);

           }, routeRender)

          .get('/profile/:user?', (ctx, next) => {
            if (ctx.isAuthenticated()) {
              return next()
            } else {
              ctx.redirect('/login');
            }
           }, routeRender)

          .get('/error', routeRender)

          .post('/login', (ctx, next) => {

              if (!ctx.assertCSRF(ctx.body)) {
                  ctx.status = 401;
                  ctx.body = { message: "wrong csrf token" };
                  return next();
              } else {
                  return passport.authenticate('local-login', async (user) => {
                    if (user) {
                      await ctx.login(user);
                      ctx.redirect(`/profile/${ctx.passport.user.username}`);
                    } else {
                      ctx.status = 403;
                      ctx.body = { message: "invalid username or password" }
                    }
                  })(ctx, next);
              }
          })

          .get('/logout', (ctx) => {
            if (ctx.isAuthenticated()) {
              ctx.logout();
            }
            ctx.redirect('/');
          });

    app.use(router.routes())
       .use(router.allowedMethods());
};
