const SysErr = require('../../class/excepiton'); 

module.exports=()=>{
    console.log("启动阶段 启动异常捕获器")
    return async (_,next)=>{
        try {
            await next();
            console.log("异常捕获");
        }catch(e){
            console.error(e);
            // if (typeof context.body === "undefined") context.body={};
            // if(e instanceof Error ){
            //     context.body.code = e.code || context.status;
            //     context.body.message = e.message;
            // }
        }
    }
}