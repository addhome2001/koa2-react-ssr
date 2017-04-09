/* eslint-disable no-console */
import Koa from 'koa';
import middlewares from './middlewares';
import router from './router';
import render from './render';

const PORT = process.env.PORT || 3000;

const app = new Koa();

// middlewares
middlewares(app);

// router
app.use(router.routes(), router.allowedMethods());

// server-render
app.use(render);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}!`);
});

module.exports = app;
