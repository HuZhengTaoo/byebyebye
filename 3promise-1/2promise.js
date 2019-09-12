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


// promise链式调用
// 1) 普通值表示不是promise 也不是错误
// 2) 如果返回的是一个promise 那么这个promise会执行 并且采用他的状态
readFile(path.resolve(__dirname,'./age.txt'),'utf8').then(data=>{
  return data
},err=>{  
  console.log('s:'+err)
}).then(data=>{ // 想让下一个then走失败 
  console.log(data)  // 需要 1） 返回一个失败的promise 抛出一个异常
  return new Promise((resolve, reject)=>{
    reject('error')
  })
  // throw new Error('失败')
})
.then(data=>{
  console.log(data)
},err=>{
  console.log(err)
})




// fs.readFile(path.resolve(__dirname, './name.txt'),'utf8',(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
//   fs.readFile(data,'utf8',(err,data)=>{
//     if(err){
//       return console.log(err)
//     }
//     console.log(data)
//   })
// })