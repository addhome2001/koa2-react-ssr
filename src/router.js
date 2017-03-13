/* eslint-disable consistent-return */
import Router from 'koa-router';
import passport from 'koa-passport';

const router = Router();

// redirect to profile if user is authenticated.
const userAuth = async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    ctx.redirect('/profile');
  } else {
    await next();
  }
};

router
  .get('/', userAuth)
  .get('/about')
  .get('/login', userAuth)
  .get('/profile', async (ctx, next) => {
    if (ctx.isAuthenticated()) {
      await next();
    } else {
      ctx.redirect('/login');
    }
  })
  .get('/error')
  .post('/login', (ctx, next) => {
    if (ctx.assertCSRF(ctx.body)) {
      return passport.authenticate('local-login', async (user) => {
        if (user) {
          await ctx.login(user);
          ctx.redirect('/profile');
        } else {
          ctx.redirect('/error');
        }
      })(ctx, next);
    }
    ctx.status = 401;
    ctx.body = { message: 'wrong csrf token' };
  })
  .get('/logout', (ctx) => {
    if (ctx.isAuthenticated()) {
      ctx.logout();
    }
    ctx.redirect('/');
  });

export default router;
