const cros = () => (require('koa2-cors'))(require('../config/koa2-cors'));
const router = require('./routes');

module.exports= app=>{
    app.use(cros());
    app.use((require('koa-helmet'))());
    app.use((require('./catch-excepition'))());
    app.use((require('./result-warpper'))());
    app.use(require('./api-filter')());
    app.use((require('koa-body'))({ multipart: true}));
    app.use((require('./mongoo'))());
    app.use(router(app));
    return async (_, next) => {
        await next();
    }
}
