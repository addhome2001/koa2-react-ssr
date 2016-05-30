import fs from 'fs';
import koa from 'koa';

const app = module.exports = new koa();

let user = {
  username: 'username',
  password: 'password'
}

//config
require('./config/koaConfig.js')(app, process.env.NODE_ENV);

//routes
require('./config/routes.js')(app);


// if (!module.parent) {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at ${process.env.PORT}!`);
    });
// }
