// 1 解决并发问题 (同步多个异步方法的执行结果)
// 2 链式调用的问题 (先获取name，通过name再获取age) 解决多个回调嵌套问题

// promise 承诺 有三个状态 等待态 成功态 失败态
// 默认现在的高版本浏览器 默认支持 promise es6-promise polyfill

// promise 是一个类 默认new的时候 是等待态
// 1 每次new 一个Promise 都需要传递一个执行器 执行器是立即执行的
// 2 执行器函数中有两个函数 resolve reject
// 3 默认Promise有三个状态 pendding 
// resolve 表示成功 fulfilled
// reject 就是拒绝 rejected
// 4 如果一旦成功了 不能变成失败 一旦失败 不能再成功 ，只有当前状态是pending的时候 才能更改状态
// 5 每个promise 都有一个then方法
// executor 是理解执行的，如果内部出错了 就会变成失败态
let Promise = require('./promise.js')
let p = new Promise((resolve,reject)=>{
  // 一旦成功就不会失败 反之亦然，默认只有等待状态的时候 才能改变
  setTimeout(()=>{
    resolve('ok')
  },1000)
  resolve('我有钱')  // 走了resolve 就不会失败
  // throw new Error('失败') // 如果抛出异常也会执行失败
})
// 没有完全解决回调问题
//[fn1,fn2] 成功回调
// [fn1-1,fn2-1] 失败的回调

p.then(
  data=>{ //fn1
  console.log('success',data)
  },
  err=>{ //fn1-1
  console.log('error',err)
  }
)

//一个实例then多次
p.then( 
  data=>{ //fn2
  console.log('success',data)
  },
  err=>{ //fn2-1
  console.log('error',err)
  }
)
p.then(
  data=>{
  console.log('success',data)
  },
  err=>{
  console.log('error',err)
  }
)