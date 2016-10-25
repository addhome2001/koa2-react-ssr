import csrf from 'koa-csrf';
import session from 'koa-session';
import convert from 'koa-convert';
import etag from 'koa-etag';
import conditional from 'koa-conditional-get';
import onerror from 'koa-onerror';
import views from 'koa-views';
import passportConfig from './passportConfig';
import body from 'koa-bodyparser';


module.exports = (app, env, passport) => {

    app.keys = ['secret1', 'secret2', 'secret3'];

    //view engine
    app.use(views('./views', { extension: 'ejs' }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(convert(session(app)));
    app.use(conditional());
    app.use(etag());
    app.use(body());

    passportConfig(passport);

    app.use((ctx, next) => {
        ctx.body = ctx.request.body;
        return next();
    });

    app.use(csrf());

    onerror(app);

    //logger
    if(env === 'development') {
        app.use(require('koa-logger')());
    }

};
