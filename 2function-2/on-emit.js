const fs = require('fs')
const path = require('path')
let school = {}
// 发布订阅模式
let e ={
  arr:[],
  on(fn){
    this.arr.push(fn)
  },
  emit(){
    this.arr.forEach(fn=>fn())
  }
}

e.on(()=>{ // 订阅
  console.log('ok')
})

e.on(()=>{
  if(Object.keys(school).length === 2){
    console.log(school)
  }
})

fs.readFile(path.resolve(__dirname, './name.txt') ,'utf8',(err,data)=>{
  school['name'] = data
  e.emit()
})
fs.readFile(path.resolve(__dirname, './age.txt') ,'utf8',(err,data)=>{
  school['age'] = data
  e.emit()
})

// 发布订阅模式 => 观察者模式 (vue watcher)

// 发布订阅者模式 发布者 和订阅者 两者没有直接关系 通过间接的arr直接桥梁

// 观察者模式 我家小宝宝 心情好

// 总结 发布和订阅之间无直接关系 观察者模式两者是有关系的

// 观察者模式包含发布订阅