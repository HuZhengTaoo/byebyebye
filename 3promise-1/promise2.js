const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
class Promise {
  constructor(executor) {
    //创建 promise executor 就会立即执行
    this.value = undefined;
    this.reason = undefined;
    this.status = PENDING;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = REJECTED;
        this.onResolvedCallbacks.forEach(fn => fn())  // 发布 有可能resolve 在then的后面
        //执行，此时先将方法存放起来，到时候成功了一次执行这些回调
      }
    };
    let reject = reason => {
      if(this.status === PENDING){
        this.reason = reason;
        this.status = FULFILLED;
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    };
    
    // 这里可能发生异常
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  // then 方法会判断当前的状态
  then(onFulfilled, onRejected) {
    // then 方法调用后应该返回一个新的promise
    let promise2 = new Promise((resolve, reject) =>{
      // // 应该在返回的promise中，取到上一次的状态 来决定这个promise2是成功还是失败
      // if(this.status === FULFILLED){
      //   //x 就是当前的data
      //   let x = onFulfilled(this.value) //将then中的方法执行
      //   resolve(x) //将结果传递到resolve方法中
      // }
      

      //应该在返回的promise中取到上一次的状态 来取决这个promise2是成功还是失败
      if (this.status === FULFILLED) {
       let x = onFulfilled(this.value);
       resolve(x)
      }
      if (this.status === REJECTED) {
        onRejected(this.reason);
      }
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(()=>{
          // todo ...
          onFulfilled(this.value);
        })
        this.onRejectedCallbacks.push(()=>{
          onRejected(this.reason)
        })
      }
    })
    return promise2
    
  }
}
module.exports = Promise
