const Promise = require('./promise')

// 如果一个promise then 的方法中返回一个普通值

let p = new Promise((resolve, reject) => {
  resolve('hello')
})

p.then((data) => {
  return data
}).then((data) => {
  console.log(data)
})