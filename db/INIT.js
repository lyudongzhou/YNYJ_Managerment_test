let aTables = require('../config/MongoTable').tables;
let mongoose = require("mongoose");
let names = {};
function register(name,Instance){
    if(names[name]){
        return "Duplicate";
    }
    names[name] = mongoose.model(name, Instance);
}
function getSchema(o){
    let instance = new mongoose.Schema(o.Fields);
    if(o.Class){
        instance.loadClass(o.Class);
    }else{
        instance.loadClass(require("./BASE").BaseDB);
    }
    return instance;
}
for(let i = 0 ; i<aTables.length;i++){
    register(aTables[i],getSchema(require("./"+aTables[i])));
}
exports.aInstance = names;