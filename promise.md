resolve函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去;  
reject函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

var Ajv = require('ajv')
var HARError = require('./error')
var schemas = require('har-schema')
//引入数据块

var ajv

//validate
function validate (name, data) {
  data = data || {}//如果data有值就返回data值，没有就给他赋值为空
 
  //初始化ajv ，同样，如果有值就赋值，没有值就从ajv模块里实例化一个出来
  ajv = ajv || new Ajv({
    allErrors: true,
    schemas: schemas
  })

  var validate = ajv.getSchema(name + '.json')//ajv的getSchema方法
  return new Promise(function (resolve, reject) {  //实例化一个promise对象，返回一个函数
    var valid = validate(data)

    !valid ? reject(new HARError(validate.errors)) : resolve(data)
  })
}

exports.afterRequest = function (data) {  //暴露接口
  return validate('afterRequest', data)
}

exports.beforeRequest = function (data) {
  return validate('beforeRequest', data)
}

exports.browser = function (data) {
  return validate('browser', data)
}

exports.cache = function (data) {
  return validate('cache', data)
}

exports.content = function (data) {
  return validate('content', data)
}

exports.cookie = function (data) {
  return validate('cookie', data)
}

exports.creator = function (data) {
  return validate('creator', data)
}

exports.entry = function (data) {
  return validate('entry', data)
}

exports.har = function (data) {
  return validate('har', data)
}

exports.header = function (data) {
  return validate('header', data)
}

exports.log = function (data) {
  return validate('log', data)
}

exports.page = function (data) {
  return validate('page', data)
}

exports.pageTimings = function (data) {
  return validate('pageTimings', data)
}

exports.postData = function (data) {
  return validate('postData', data)
}

exports.query = function (data) {
  return validate('query', data)
}

exports.request = function (data) {
  return validate('request', data)
}

exports.response = function (data) {
  return validate('response', data)
}

exports.timings = function (data) {
  return validate('timings', data)
}
 
