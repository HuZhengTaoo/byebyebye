const Promise = require('./promise.js')

let fs = require('fs')

// 复杂逻辑解耦可以使用发布订阅
// fs.readFile('./name.txt','utf8',(err,data)=>{
//   console.log(data)
// })

// fs.readFile('./age.txt','utf8',(err,data)=>{
//   console.log(data)
// })

// 一般做法
// 需要等待第一个人的输出的结构 是下一个人的输入
// 恶魔金字塔 回调地狱 不好维护 错误处理不方便
// fs.readFile('./name.txt','utf8',(err,data)=>{
//   fs.readFile(data,'utf8',(err,data)=>{
//     console.log(data)
//   })
// })