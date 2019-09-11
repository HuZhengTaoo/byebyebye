// 1 解决并发问题 (同步多个异步方法的执行结果)
// 2 链式调用的问题 (先获取name，通过name再获取age) 解决多个回调嵌套问题

// promise 是一个类
// 1 每次new 一个Promise 都需要传递一个执行器 执行器是立即执行的
// 2 执行器函数中有两个函数 resolve reject
// 3 默认Promise有三个状态 pendding 
// resolve 表示成功 fulfilled
// reject 就是拒绝 rejected
// 4 如果一旦成功了 不能变成失败 一旦失败 不能再成功 ，只有当前状态是pending的时候 才能更改状态
// 5 每个promise 都有一个then方法
let p = new Promise((resolve,reject)=>{
  resolve('我有钱')  // 走了resolve 就不会失败
  throw new Error('失败') // 如果抛出异常也会执行失败
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

//一个实例then多次
p.then(
  data=>{
  console.log('success',data)
  },
  err=>{
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