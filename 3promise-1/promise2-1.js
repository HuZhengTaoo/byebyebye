let Promise = require('./promise2')

let p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('ok')
    // throw new Error('失败')
  },2000)
})
//多个then，并且是异步就是发布订阅模式
p.then(data=>{
  console.log(data,'success')
},err=>{
  console.log(err,'error')
})
p.then(data=>{
  console.log(data,'success')
},err=>{
  console.log(err,'error')
})
p.then(data=>{
  console.log(data,'success')
},err=>{
  console.log(err,'error')
})