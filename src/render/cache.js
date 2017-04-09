/* eslint-disable no-console */
import LRUCache from 'lru-cache';

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60,
});

export const getCacheKey = ctx =>
  `secret-${ctx.session.secret}-url-${ctx.url}`;

export async function renderCache(ctx, next) {
  const key = getCacheKey(ctx);

  if (ssrCache.has(key)) {
    console.log('Rendering cached view.');
    await ctx.render('index', ssrCache.get(key));
  } else {
    await next();
  }
}

export function setCacheKey(ctx) {
  ssrCache.set(getCacheKey(ctx), ctx.state);
}
