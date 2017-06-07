/* eslint-disable no-console */
import LRUCache from 'lru-cache';

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60,
});

export const getCacheKey = ctx =>
  `secret-${ctx.session.secret}-url-${ctx.url}`;

export function setCacheKey(key, content) {
  ssrCache.set(key, content);
  return content;
}

export default function (ctx, matchRoutes) {
  const key = getCacheKey(ctx);

  if (ssrCache.has(key)) {
    console.log('Render cached.');
    return ssrCache.get(key);
  }
  console.log('View cached.');
  return setCacheKey(key, matchRoutes(ctx));
}
