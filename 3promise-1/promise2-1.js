let Promise = require('./promise2')

let p = new Promise((resolve,reject)=>{
  throw new Error('失败')
})

p.then(data=>{
  console.log(data)
},err=>{
  console.log(err)
})