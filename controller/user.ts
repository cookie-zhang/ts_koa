const UserModel = require('../modules/user');
import { Context } from 'koa'

class userController {
    // 创建用户
    static async create(ctx:any){
        let req = ctx.request.body
        if(req.id && req.name && req.age){
            try {
                const ret =await UserModel.createUser(req);
                const data = await UserModel.getUserDetails(ret.id);
                ctx.body = {
                    code:'200',
                    message:"创建用户成功",
                    data
                }
            } catch (err){
                ctx.body= {
                    code:"412",
                    message:"创建用户失败",
                    data:err
                }
            }
        }else {
            ctx.body={
                code:"416",
                message:"参数不全"
            }
        }
    }
    //获取用户详情
    static async detail(ctx:any){
        let id = ctx.params.id;
        if(id){
            try {
                let data = await UserModel.getUserDetails(id);
                // this.response.status = 200;
                ctx.body = {
                    code:"200",
                    message:"查询成功",
                    data
                }
            } catch(err){
                // this.response.status = 412;
                ctx.body = {
                    code:"412",
                    message:"查询失败",
                    data:err
                }
            }
        }else {
            // this.response.status = 416;
            ctx.body = {
                code:"416",
                message:"参数不全",
            }
        }
    }
}

module.exports = userController