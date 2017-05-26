const UserKey = Symbol('user');
const redis = require('./redis.js')
class User {
    constructor(id){
        // this.name = name;
        this.id = id;
        this.userLevel = id=='0'? 'Admin':'CommonUser'
    }

    login(name, pw, callback){
        redis.sSetValue(this.id, 'name', name);
        redis.sSetValue(this.id, 'pw', pw)
        callback()
    }

    bindEmail(email){
        redis.sSetValue(this.id, {email:email})
    }

    getUserLoginInfo(callback){
        redis.sGetValue(this.id, function(result){
            callback(result);
        })
    }

    getAuth(callback){
        redis.sGetValue(this.id, function(result){
            let hasLogin = false
            let userName = ''
            if(result == null || !result){
                console.log('get no result')
            }else{
                hasLogin = true;
                userName = result.name
            }
            callback({hasLogin: hasLogin, userName: userName});
        })
    }
    logOut(callback){
        redis.del(this.id, function(){
            console.log('logout');
            callback()
        })
    }
}

if(!global[UserKey]){
    global[UserKey] = User
}

module.exports = global[UserKey]