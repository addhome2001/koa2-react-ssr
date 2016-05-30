import path from 'path';
import parse from 'koa-bodyparser';
import csrf from 'koa-csrf';
import session from 'koa-session';
import convert from 'koa-convert';
import etag from 'koa-etag';
import conditional from 'koa-conditional-get';
import onerror from 'koa-onerror';
import views from 'koa-views';
import co from 'co';

module.exports = (app, env) => {

    app.keys = ['secret1', 'secret2', 'secret3'];

    csrf(app);
    onerror(app);

    //view engine
    app.use(views('./views', { extension: 'ejs' }));
    
    app.use(convert(session(app)))
    app.use(parse({ limit: '10mb' }))
    app.use(conditional())
    app.use(etag());

    //logger
    if(env === 'development') {
        app.use(require('koa-logger')());
    }

}
