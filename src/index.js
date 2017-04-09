/* eslint-disable no-console */
import Koa from 'koa';
import middlewares from './middlewares';
import router from './router';
import render from './render';
import { renderCache, setCacheKey } from './render/cache';

const PORT = process.env.PORT || 3000;

const app = new Koa();

// middlewares
middlewares(app);

// router
app.use(router.routes(), router.allowedMethods());

// render-cache
app.use(renderCache);

// server-render
app.use(render);

// set-cache
app.use(setCacheKey);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}!`);
});

module.exports = app;
