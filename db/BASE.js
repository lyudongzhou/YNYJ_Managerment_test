class BaseDB{
    constructor(){
        this.fields = {};
    }
    static addFields(oFields){
        for(let i in oFields){
            if(this.fields[i]!==undefined){
                this.fields[i] = oFields[i];
            }
        }
    }
    static findPage(oQuery = {},option = {pageSize:1,page:2},sFields){
        if(sFields){
            return this.find(oQuery)
                .select(sFields)
                .limit(option.pageSize)
                .skip(option.page*option.pageSize)
                .exec();
        }else{
            return this.find(oQuery)
                .limit(option.pageSize)
                .skip(option.page*option.pageSize)
                .exec();
        }
    }
}
exports.BaseDB = BaseDB;