const mongoose = require('mongoose');

const {Schema,model} = mongoose;

const userSchema = new Schema({
    name:String,
    pwd:String,
    auth:{type:Number,default:0}
});

module.exports=model('j_user',userSchema);