/**
 * 匹配路由文件，合并载入路由
 */

const Router=new require('koa-router');
const glob=require('glob');
//载入匹配规则
const {patten}=require('../../config/routes');

//寻找符合规则的文件
const router = new Router();
//匹配文件路径


module.exports=app=>{
    console.log("启动阶段 查找路由路径");
    glob(patten, async (err, files) => {
        files.map(extraRouter => {
            //载入匹配的路由文件
            console.log("启动阶段 装载路由" + extraRouter);
            extraRouter = require(`../../../${extraRouter}`);
            //合并路由
            app.use(extraRouter.routes()).use(extraRouter.allowedMethods());
        });
        console.log("启动阶段 查找路由路径完成");
    });
    return async (_,next)=>{
        await next();
    }
};


