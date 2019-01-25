const jwt = require("jsonwebtoken");

const TOKEN_KEY="tokenkey@123";

module.exports=new class {

    createToken(id){
        var d=new Date();
        d.setTime(d.getTime()+1000*60*60*24*30);
        console.log("token负载数据",{ id: id, endTime: d });
        const token = jwt.sign(
            {userId: id, endTime: d.getTime()}, 
            TOKEN_KEY, 
            { expiresIn: 1000 * 60 * 60 * 24 * 30  });
        return {
            token:token,
            endTime:d.getTime()
        }
    }


    decodeToken(token){
        console.log(token);
        var tokenData=jwt.verify(token,TOKEN_KEY);
        console.log('token解析数据',tokenData);
        return tokenData;
    }
}