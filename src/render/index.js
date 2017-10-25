import matchRoutes from './matchRoutes';
import cache from './cache';

export default async function (ctx) {
  ctx.status = 200;
  await ctx.render('index', cache(ctx, matchRoutes));
}
