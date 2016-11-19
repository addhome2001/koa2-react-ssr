import koa from 'koa';
import passport from 'koa-passport';

const app = module.exports = new koa();

//config
import koaConfig from './config/koaConfig';
koaConfig(app, process.env.NODE_ENV, passport);

//router
import router from './config/koaRouter';
router(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at ${process.env.PORT}!`);
});
