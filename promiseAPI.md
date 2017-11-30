## Promise API  //承诺API
//har = http archive

```js
import * as validate from 'har-validator'      //进口*作为一个har-validator验证
import * as validate from 'har-validator/lib/promise'
import { request, response } from 'har-validator/lib/promise'   //请求，响应
```

### validate.afterRequest(data) //验证请求后的数据

> Returns a promise that resolves to the valid object. 
//返回一个的承诺（这个承诺解析到有效对象中）
//
Promise.resolve(value)方法返回一个以给定值解析后的Promise对象。但如果这个值是个thenable（即带有then方法），返回的promise会“跟随”                        这个thenable的对象，采用它的最终状态（指resolved/rejected/pending/settled）；否则以该值为成功状态返回promise对象。
//
- **data**: `Object` *(Required)*
  a ["afterRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects

```js
validate.afterRequest(data)//证实请求的数据后
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.beforeRequest(data) //证实请求的数据前

> Returns a promise that resolves to the valid object.
//返回一个的承诺（这个承诺解析到有效对象中）

- **data**: `Object` *(Required)*
  a ["beforeRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects

```js
validate.beforeRequest(data)  
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.browser(data)//证实浏览器的数据

> Returns a promise that resolves to the valid object.
//返回一个的承诺（这个承诺解析到有效对象中）

- **data**: `Object` *(Required)*
  a [browser](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#browser) object

```js
validate.browser(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.cache(data)//证实缓存对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [cache](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) object

```js
validate.cache(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.content(data)//内容

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [content](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#content) object

```js
validate.content(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.cookie(data)//cookie对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [cookie](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cookies) object

```js
validate.cookie(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.creator(data)//创建者

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [creator](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#creator) object

```js
validate.creator(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.entry(data)//入口对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  an [entry](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#entries) object

```js
validate.entry(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.har(data)//HAR(哈尔)对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a full [HAR](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md) object

```js
validate.har(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.header(data)//头对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [header](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#headers) object

```js
validate.header(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.log(data)//日志对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [log](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#log) object

```js
validate.log(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.page(data)//页面对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [page](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#pages) object

```js
validate.page(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.pageTimings(data)//pageTimings对象  这个对象描述了在页面加载过程中各个事件发生的时间点。所有的时间都是以毫秒计算的。如果有的时间无法计算出来，那么相应字段置为-1。

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [pageTimings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#pageTimings) object

```js
validate.pageTimings(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.postData(data)//postData  Post数据信息

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [postData](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#postData) object

```js
validate.postData(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.query(data)//queryString查询字符串信息

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [queryString](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#querystring) object

```js
validate.query(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.request(data)//请求对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [request](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#request) object

```js
validate.request(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.response(data)//响应对象

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [response](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#response) object

```js
validate.cacheEntry(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.timings(data)//计时对象 这个对象描述了请求/响应过程的各个阶段。时间都是以毫秒为单位。

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [timings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#timings) object

```js
validate.timings(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```
