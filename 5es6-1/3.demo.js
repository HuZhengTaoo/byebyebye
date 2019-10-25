let obj = {name:'zf',age:{count:10}}

let newObj = JSON.parse(JSON.stringify(obj))

let obj = {name:'zf',age:{
    count:10,
    a:function(){},
    b:null,
    c:undefined,
    d:/D/
  }
}
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
//{ name: 'zf', age: { count: 10, b: null, d: {} } }

function deepClone(obj){
  if(obj === undefined) return obj
  // typeof function  function // 用于判断函数
  if(typeof obj !== 'obj') return  obj
  if(obj instanceof RegExp) return new RegExp(obj)
  if(obj instanceof Date) return new Date(obj)
  let cloneObj = new obj.constructor
  for(let key in obj){
    // 无论是对象还是数组 都可以循环
    if(obj.hasOwnProperty(key)){
      // cloneObj[key] = obj[key]
      // 做一个映射关系 把它存起来
      // js数据结构 集合set hash表
      cloneObj[key] = deepClone(obj[key])
    }
  }
  return cloneObj
}

let r = /\d+/
let reg = deepClone(r)
console.log(reg == r)

// [1,2,3]
// {name:'123'}
// [1,2,3,[2]]
// {err:new Error('123')}
//[] / {}
// ([]) instanceof Object
// {} instanceof Object
// ({}).constructor
// ([]).constructor
// new Error

function A(){
  this.a = 1 ;
  this.b =2

}
A.prototype.aa = function(){}
let a = new A()
console.log(a)
for(let key in a){
  console.log(a)
  if(a.hasOwnProperty(key)){
    console.log(key)
  }
}