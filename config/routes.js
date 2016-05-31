import koarouter from 'koa-router';
import routeRender from './render';
import passport from 'koa-passport';
const router = koarouter();

module.exports = (app, env) => {
    router.get('/',routeRender)
    
          .get('/about', routeRender)
    
          .get('/login',(ctx, next) => {
            if (!ctx.isAuthenticated()) {
                return next();
            } else {
                ctx.redirect(`/profile/${ctx.user}`);
            }
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
                if (user === false) {
                  ctx.status = 401
                  ctx.body = { success: false }
                } else {
                  await ctx.login(user);
                  ctx.redirect(`/profile/${ctx.req.user.username}`);             
                }
              })(ctx, next)
          })
     
          .get('/logout', (ctx) => {
            ctx.logout()
            ctx.redirect('/')
          })
          
    app.use(router.routes())
       .use(router.allowedMethods());
}
