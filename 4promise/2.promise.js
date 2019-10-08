
// 安装一个插件 bracket pair ...
const Promise = require('./promise.js')

let fs = require('fs')

function read(filename,encoding){
  return new Promise((resolve, reject) =>{
    // 读取的文件不存在，
    fs.readFile(filename,encoding, (err,data)=>{
      if(err) reject(err)
      resolve(data)
    })
  })
}

// 1)如果then成功或失败的结果中 返回的还是一个promise 
// 会等待这个promise的执行结果 并将结果向外层的then的下一个then中，并将结果传递参数中
// 2) 如果then （成功方法，失败方法）抛出异常的时候 会走下一次then的失败
// 走失败有两种情况 （1）返回一个失败的promise （2）抛出异常
// 3) 我希望 走完失败后 就终止promise
read('./name1.txt','utf8').then(data=>{
  // return read(data,'utf8')
  return new Promise(()=>{}) // 返回一个 不成功也不失败的promise 就可以终止链的调用
},err=>{
  console.log(err)
})
.then((data)=>{
  console.log(data)
},(err)=>{

})
// 如果如果想链式调用 第一种返回this 第二中 返回一个新的实例