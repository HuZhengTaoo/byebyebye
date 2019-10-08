let Promise = require('./promise.js')
let p = new Promise((resolve,reject)=>{
  // 一旦成功就不会失败 反之亦然，默认只有等待状态的时候 才能改变
  resolve('我有钱')  // 走了resolve 就不会失败
  // throw new Error('失败') // 如果抛出异常也会执行失败
})
// 没有完全解决回调问题
p.then(
  data=>{
  console.log('success',data)
  },
  err=>{
  console.log('error',err)
  }
)