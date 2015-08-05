'use strict';
var AV = require('leanengine');


var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;

AV.initialize(APP_ID, APP_KEY, MASTER_KEY);
// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();
// TODO 说明文档更新
AV.Promise._isPromisesAPlusCompliant = false;
/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request, response) {
  response.success('Hello world!');
});
module.exports = AV.Cloud;
//exports.cloud = AV.Cloud;
