var app = require('koa')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror:OnErrorEventHandler = require('koa-onerror')
  , cors = require('koa-cors');

import { Context } from 'koa'

var index = require('./routes/index');
var users = require('./routes/users');

// error handler
if(onerror){
  onerror(app);
}

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());
app.use(cors());

app.use(function *(this:Context,next:Function):any{
  var start:Number = Number(new Date);
  yield next;
  var ms = Number(new Date) - Number(start);
  console.log('%s %s - %s', this.method+'-method', this.url+'-url', ms+'-ms');
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on('error', (err:any, ctx:Object) => {
  console.error('server error', err, ctx)
});

module.exports = app;
