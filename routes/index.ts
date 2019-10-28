var router = require('koa-router')();
import { Context } from 'koa'

router.get('/', function *(this:Context,next:any) {
  yield this.render('index', {
    title: 'Hello World Koa!',
  });
});

router.get('/foo', function *(this:Context,next:any) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
