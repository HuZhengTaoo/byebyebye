 // 柯里化 我们可以把一个大函数拆分成很多个函数

 // 判断类型 Object.prototype.toString.call


 // 高阶函数中包含 科里化 可以保留参数 bind
//  console.log(Object.prototype.toString.call([]))

const checkType = (type) => {
  return (content) => {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}
// 闭包
let types = ['Number','String','Boolean']
let utils = {}
types.forEach(type=>{
  utils['is'+type] = checkType(type)
})

let isString = checkType('String')

console.log(utils.isString('123'))
console.log(utils.isNumber(123))

// 函数科里化怎么实现
const checkType = (type,content) => {
  return Object.prototype.toString.call(content) === `[object ${type}]`
}

// 通用科里化
const add = (a,b,c,d,e) => {
  return a+b+c+d+e
}

const curring = (fn,arr=[]) => {
  let len = fn.length
  return (...args)=>{ 
    arr = arr.concat(args) // [1] [1,2,3,4,5]
    if(arr.length < len){
      return curring(fn,arr)
    }
    return fn(...arr)
  }
}
let r = curring(add)(1,2)(3)(4,5) 
console.log(r)
// let fn = (a,b,c,d)=>{}
// fn.length === 4