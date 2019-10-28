var router = require('koa-router')();
import { Context } from 'koa'
router.prefix('/users');

const UsersController = require("../controller/user")

router.post("/user",function *(this:Context){
  yield UsersController.create(this)
});
router.get("/user/:id",function *(this:Context,next:Function){
  yield UsersController.detail(this)
});

module.exports = router;
