const checkType = (type,content) => {
  return Object.prototype.toString.call(content) === `[object ${type}]`
}

let types = ['Number','String','Boolean']
let utils = {}
types.forEach(type=>{
  utils['is'+type] = curring(checkType)(type) //先传入一个参数
})

console.log(utils.isString('123'))