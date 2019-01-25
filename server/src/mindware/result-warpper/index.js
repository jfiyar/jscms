/**
 * 
 * 对返回的数据进行包装
 * 
 */
const SysException= require('../../class/excepiton'); 
module.exports = ()=>{
    console.log("启动阶段 装载返回体包装器");
    return async (ctx, next) => {
        try{
            await next();
            if(ctx.response.status===200) {
                ctx.body = {
                    code: 0,
                    message: 'success',
                    data: ctx.body
                }
            }else{
                throw new SysException({code:ctx.response.status,message:ctx.response.message});
            }
        }catch(e){
            ctx.body = {
                code: e.code||ctx.response.status||-1,
                message: e.message,
            }
            throw e;
        }
        console.log("返回体包装");
        
    }
}