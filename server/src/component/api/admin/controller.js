const jwt = require("jsonwebtoken");
const service = require('./service');
const ApiErr = require("../../../class/excepiton");
const err= require('../../common/apiExceition');
const token=require('../../common/token');

module.exports=new class 
{
    async login(ctx){
        const user=await service.login(ctx.request.body.name,ctx.request.body.pwd);
        console.log(user);
        if (!user){
            throw new ApiErr(err.ADMIN_LOGIN_ERR);
        }
        ctx.body = token.createToken(ctx.request.body.name);

    }

    getSelfInfo(ctx){
        const reqToken = ctx.request.header.authorization;
        let id;
        try{
            id=token.decodeToken(reqToken);
            if(!id){
                throw new ApiErr(err.USER_NOT_LOGIN);
            }
        }catch(e){
            throw new ApiErr(err.USER_NOT_LOGIN);
        }
        ctx.body =  id;
    }
}