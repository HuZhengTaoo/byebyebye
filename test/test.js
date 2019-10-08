let fs = require('fs')
let path =require('path')

fs.readFile(path.resolve(__dirname,'./name.txt'),'utf8',(err,data)=>{
  if(err){
    return console.log(err)
  }
  fs.readFile(data,'utf8',(err,data)=>{
    if(err){
      return console.log(err)
    }
    console.log(data)
  })
})

function readFile(...args){
  return new Promise((resolve, reject=>{
    fs.readFile(...args,function(err,data){
      if(err) reject(err)
      resolve(data)
    })
  }))
}

readFile(path.resolve(__dirname,'./age.txt'),'utf8')
  .then(data=>{
    return readFile(data,'utf8')
  })
  .then(data=>{
    console.log(data)
    },err=>{
      console.log(err)
    }
  )