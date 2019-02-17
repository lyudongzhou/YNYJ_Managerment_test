const BaseDB = require("./BASE").BaseDB;
class News extends BaseDB{
    constructor(){
        super();
    }
}
const Fields = {
    title:{type:String,required:true},
    content:{type:String,required:true},
    images:{type:Array}
};
exports.Class = News;
exports.Fields = Fields;
