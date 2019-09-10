const fs = require('fs')
const path = require('path');
let school = {}
// 并发的问题 如何解决 计数器
// let index = 0
// function out(){
//   if(index === 2){
//     console.log(school)
//   }
// }

const after = (times,fn) => () => --times === 0 && fn()
let newAfter = after(2,()=>{
  console.log(school)
})


fs.readFile(path.resolve(__dirname, './name.txt') ,'utf8',(err,data)=>{
  school['name'] = data
  newAfter()
})
fs.readFile(path.resolve(__dirname, './age.txt') ,'utf8',(err,data)=>{
  school['age'] = data
  newAfter()
})
