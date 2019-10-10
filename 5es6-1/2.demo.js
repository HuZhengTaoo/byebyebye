let [,...args] = ['123','456','789']
console.log(args)
// [ '456', '789' ]
let [,...args,] = ['123','213','123']
console.log(args)
// Rest element must be last element

let {name,...obj} = {name:'zf',age:10,address:'回龙观'};
console.log(obj);
// { age: 10, address: '回龙观' }

[1,2,3,4]
let a = Math.max(...[1,2,3,5])
console.log(a)

//在全局作用域下用let 声明，没有挂载到window上面，而是挂载到自己的作用域下面

// 对象的展开 数组的展开 浅拷贝
let obj = {name:'zf',age:{a:1}}
let newObj = {...obj}
newObj.age.a = 1000 
console.log(obj)
//{ name: 'zf', age: { a: 1000 } }