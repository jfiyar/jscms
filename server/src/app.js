
const app = new (require('koa'))();
//载入配置文件
const { port } = require('./config/app');
//载入中间件
(async ()=>{
    console.clear();
    app.use((require('./mindware')(app)));
    app.listen(port, () => { console.log(`启动阶段 开始监听 http://localhost:${port}`); });
})();

