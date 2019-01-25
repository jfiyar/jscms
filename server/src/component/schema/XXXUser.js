import mongoose from 'mongoose'
const {
    Schema
} = mongoose

/**
 * 用户管理(玩家管理)
 * uid: SDK通行证id
 * account: 账号(按通行证帐号account更新)
 * email: 邮箱(按通行证邮箱email更新)
 * mobile: 手机号(按通行证手机号phone更新)
 * portrait: 头像
 * name: 真实姓名
 * cardno: 身份证号
 * lastIP 最后访问ip
 */
const UserSchema = new Schema({
    uid: {
        type: String,
        default: '',
        unique: true,
        required: 'SDK通行证id不能为空'
    },
    account: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    mobile: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    cardno: {
        type: String,
        default: ''
    },
    portrait: {
        type: String,
        default: ''
    },
    lastIP: {
        type: String,
        default: ''
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

UserSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})


module.exports = mongoose.model('User', UserSchema)
