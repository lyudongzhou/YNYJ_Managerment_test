const config = require("../config/MongoDBConf").config;
const InstanceMap = require("../db/INIT").aInstance;
function createURL(){
    if(config.user!==""&&config.user!==undefined){
        return config.user+":"+config.pwd+"@";
    }else{
        return "";
    }
}
const mongoose = require('mongoose'),
    DB_URL = 'mongodb://'+createURL()+(config.url||"localhost")+':'+(config.port||27017)+'/'+config.DBName+'';
/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});
// InstanceMap["News"].insertMany([{title:"5",content:"5"},{title:"6",content:"6"},{title:"7",content:"7"}]);
// InstanceMap["News"].findPage({},{pageSize:25,page:0},"title").then(function(e,b){
//     console.log(e)
// });
// InstanceMap["News"].find().exec().then((e)=>{
//     console.log(e);
// });