resolve函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去;  
reject函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。


var Ajv = require('ajv')
var HARError = require('./error')
var schemas = require('har-schema')
//引入数据块

var ajv

//validate主函数
function validate (name, data) {
  data = data || {}//如果data有值就返回data值，没有就给他赋值为空
 
  //初始化ajv ，同样，如果有值就赋值，没有值就从ajv模块里实例化一个出来
  ajv = ajv || new Ajv({
    allErrors: true,
    schemas: schemas
  })

  var validate = ajv.getSchema(name + '.json')//ajv的getSchema方法，自动生成一个验证函数
  
  return new Promise(function (resolve, reject) {  //返回一个函数,这个函数是实例化了一个promise对象，
    //Promise resolver,创造并返回一个新的承诺。 resolver必须是一个功能。该resolver函数传递两个参数：
//resolve应该用一个参数来调用。如果用一个非承诺价值来调用， 那么承诺就是用这个价值来实现的。如果用承诺（A）来调用，那么所返回的承诺将承担该新承诺（A）的状态。
//reject应该用一个参数来调用。这个答复将被拒绝。
    var valid = validate(data)//将数据验证并返回true或者false
 
    !valid ? reject(new HARError(validate.errors)) : resolve(data)
  })
}

//请求后的数据
exports.afterRequest = function (data) {  //暴露接口
  return validate('afterRequest', data)
}

//证实请求的数据前
exports.beforeRequest = function (data) {
  return validate('beforeRequest', data)
}

//证实浏览器的数据
exports.browser = function (data) {
  return validate('browser', data)
}

//证实缓存对象
exports.cache = function (data) {
  return validate('cache', data)
}

//内容
exports.content = function (data) {
  return validate('content', data)
}

//cookie对象
exports.cookie = function (data) {
  return validate('cookie', data)
}

//创建者
exports.creator = function (data) {
  return validate('creator', data)
}

//入口对象
exports.entry = function (data) {
  return validate('entry', data)
}

//HAR(哈尔)对象
exports.har = function (data) {
  return validate('har', data)
}

//头对象
exports.header = function (data) {
  return validate('header', data)
}

//日志对象
exports.log = function (data) {
  return validate('log', data)
}

//页面对象
exports.page = function (data) {
  return validate('page', data)
}

//pageTimings对象 这个对象描述了在页面加载过程中各个事件发生的时间点。所有的时间都是以毫秒计算的。如果有的时间无法计算出来，那么相应字段置为-1。
exports.pageTimings = function (data) {
  return validate('pageTimings', data)
}

//postData Post数据信息
exports.postData = function (data) {
  return validate('postData', data)
}

//queryString查询字符串信息
exports.query = function (data) {
  return validate('query', data)
}

//请求对象
exports.request = function (data) {
  return validate('request', data)
}

//响应对象
exports.response = function (data) {
  return validate('response', data)
}

//计时对象 这个对象描述了请求/响应过程的各个阶段。时间都是以毫秒为单位。
exports.timings = function (data) {
  return validate('timings', data)
}
 
