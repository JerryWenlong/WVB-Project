'use strict';
/**
 * New node file
 */
var redis = require("redis");
const CLIENT = Symbol();
const redisSymbol = Symbol();

class Redis {
    constructor(){
        this.client = this.connect();
    }
    connect(){
        let RDS_PORT = 6379;
        let RDS_HOST = '47.88.136.130'; //my cloud server
        // let RDS_HOST = '10.19.35.74';//my VM
//      let RDS_HOST = '127.0.0.1';
        let RDS_OPTS = {
             auth_pass: 'alwaysJs.com'
        };
        let client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
        return client;
    }
    testConnect(){
        console.log('test connect redis')
        this.client.on('ready', function(){
            console.log('Redis ready');
        })
        this.client.on('connect', function(){
            console.log('Redis connect');
        })
    }
    setValue(key, value, callback){
        this.client.set(key, value, callback);
    }
    sSetValue(key, field, value, callback){
        this.client.hset(key, field, value, callback);
    }
    // hsSetValue(key, ...[field, value], callback){
    //     this.client.hset(key, ...[field, value], callback);
    // }
    getValue(key, callback){
        this.client.get(key, callback);
    }
    sGetValue(key, callback){
        this.client.hgetall(key, function(err, res){
                if(err){
                    console.log('Error:' + err);
                    callback(err);
                }
                callback(res);
            });
    }
    del(key, callback){
        console.log('del key->' + key)
        this.client.del(key, callback)
        // this.client.expire(key, 0.001, callback)
    }
}

if(!global[redisSymbol]){
    global[redisSymbol] = new Redis();
}
module.exports = global[redisSymbol];