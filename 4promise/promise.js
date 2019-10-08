const PENDING = 'PENDING' // 宏
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class Promise{
   constructor(executor){ // executor 会立即执行
     this.status = PENDING
     this.value = undefined //成功的值
     this.reason = undefined //失败的原因
     // 每个promise 都有自己的成功和失败 不是公共的
     this.resolveCallbacks = []
     this.rejecteCallbacks = []
     let resolve = (value) => { 
      // value表示成功的原因
      if(this.status === PENDING){
        this.status = FULFILLED
        this.value = value
        // 如果逻辑是异步 我会让数组里订阅的成功回调执行
        this.resolveCallbacks.forEach(fn=>fn())
      }
     }
     let reject = (reason) => { 
      // reason表示失败的原因
      if(this.status === PENDING){
        this.status = REJECTED
        this.reason = reason
        // 如果逻辑是异步 我会让数组里订阅的失败回调执行
        this.rejecteCallbacks.forEach(fn=>fn())
      }
     }
     try{
       executor(resolve,reject)
     }catch(e){
       reject(e)
     }
     executor(resolve,reject)
   }
   then(onfulfilled,onrejected){
     if(this.status === FULFILLED){
       return onfulfilled(this.value)
     }
     if(this.status === REJECTED){
       return onrejected(this.reason)
     }
     if(this.status === PENDING){
       // executor 中的逻辑可能是异步的
       // 订阅成功和失败的回调

      // 不想破坏原函数 还想扩展
      //  this.resolveCallbacks.push(onfulfilled)
      //  this.rejecteCallbacks.push(onrejected)
      this.resolveCallbacks.push(()=>{
        //todo... 类似之前的before
        onfulfilled(this.value)
      })
      this.rejecteCallbacks.push(()=>{
        onrejected(this.reason)
      })
     }
   }
}

// node 中模块的写法 commonjs规范
module.exports = Promise