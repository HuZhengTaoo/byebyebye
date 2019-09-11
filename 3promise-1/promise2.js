const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
class Promise {
  constructor(executor) {
    //创建 promise executor 就会立即执行
    this.value = undefined;
    this.reason = undefined;
    this.status = PENDING;
    let reject = value => {
      this.value = value;
      this.status = FULFILLED;
    };
    let resolve = reason => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
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
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}
module.export = Promise;
