import koarouter from 'koa-router';
import routeRender from './render';
import passport from 'koa-passport';
import body from 'co-body';
const router = koarouter();

module.exports = (app, env) => {
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
              return passport.authenticate('local-login', async (user, info, status) => {
                if (user) {
                  await ctx.login(user);
                  ctx.redirect(`/profile/${ctx.passport.user.username}`);
                } else {
                  ctx.status = 401;
                  ctx.body = { success: false }
                }
              })(ctx, next)
          })
     
          .get('/logout', (ctx) => {
            if (ctx.isAuthenticated()) {
              ctx.logout();
            }
            ctx.redirect('/');
          });
          
    app.use(router.routes())
       .use(router.allowedMethods());
}
