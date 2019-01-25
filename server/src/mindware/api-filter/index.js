const token = require('../../component/common/token');
const Apierr = require('../../class/excepiton');
const err = require('../../component/common/apiExceition');

module.exports=()=>{
    return async (ctx,next)=>{
        if (!new RegExp('^/api/admin/(?!login)').test(ctx.originalUrl)) {
            await next();
        } else {
            try{
                const reqToken = ctx.request.header.authorization;
                token.decodeToken(reqToken);
                await next();
            }catch(e){
                throw new Apierr(err.USER_NOT_LOGIN);
            }
        }
    }
}