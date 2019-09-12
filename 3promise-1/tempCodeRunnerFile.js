let  fs = require('fs')
let path = require('path')
// 原生的方法 都是通过函数的第一个参数来控制
// 如果需要改造成promise 就先将回调的方法 改造成promise

function readFile(...args){
  return new Promise((resolve, reject) => {
    fs.readFile(...args,function(err, data){
      if(err) reject(err);
      resolve(data);
    })
  })
}

// 链式调用 如果返回一个普通值 会走下一个then的成功
// 抛出错误 then失败的方法
// 如果是promise 就让promise执行采用他的状态
// 是返回一个新的promise 来实现链式调用
readFile(path.resolve(__dirname,'./age.txt'),'utf8').then(data=>{
  return readFile(data,'utf8')
}).then(data=>{
  console.log(data)
},err=>{
  console.log(err)
})