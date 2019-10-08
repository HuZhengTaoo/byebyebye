
const Promise = require('promise.js')

let fs = require('fs')

function read(filename,encoding){
  return new Promise((resolve, reject) =>{
    // 读取的文件不存在，
    fs.readFile(filename,encoding, (err,data)=>{
      if(err) reject(err)
      reject(data) // 特殊
    })
  })
}

read('./name1.txt','utf8').then(data=>{
  return 123
},err=>{
  console.log('demo',err)
}).then((data)=>{
  console.log(data)
},(err)=>{

})
