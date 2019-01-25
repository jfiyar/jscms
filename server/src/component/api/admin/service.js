const User = require('../../schema/user');

module.exports=new class{

    async login(name,pwd){
        return await User.findOne({ name: name, pwd: pwd });
    }

    getUserInfo(userId){
        return {
            id:userId,
            name:"none",
        }
    }
}