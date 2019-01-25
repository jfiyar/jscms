const mongoose = require('mongoose');
const dbInfo = require('../../config/mongoo');

module.exports=()=>{
    console.log("连接",dbInfo);
    mongoose.connect(dbInfo, { useNewUrlParser: true } , (err) => {
        if(err) throw err;
        console.log('连接mongoose成功')
    });
    return async (ctx,next)=>{
        await next();
    }
}