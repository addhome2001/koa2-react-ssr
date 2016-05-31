import fs from 'fs';
import koa from 'koa';
import passport from 'koa-passport';

const app = module.exports = new koa();

//config
import koaConfig from './config/koaConfig';
koaConfig(app, process.env.NODE_ENV, passport);

//routes
import routes from './config/routes';
routes(app);


// if (!module.parent) {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at ${process.env.PORT}!`);
    });
// }
