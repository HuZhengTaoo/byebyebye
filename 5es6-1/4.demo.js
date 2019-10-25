let obj = {
  a:1,
  b:2,
  s:Symbol()
}

console.log(Symbol() === Symbol())

let obj = {
  a:1,
  b:2,
  [Symbol()]:1
}
console.log(obj) //{ a: 1, b: 2, [Symbol()]: 1 }
console.log(Object.keys(obj)) // [ 'a', 'b' ]
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol() ]

// Reflect 包含了 keys+getOwnPropertySymbols
// 以后所有的Object.xxx 都会变成Reflect.xxx
console.log(Reflect.ownKeys(obj))

// 并集
let arr1 = [1,2,3]
let arr2 = [3,4,5]
// set 是可以被迭代，那么就可以使用[...set]
let set = new Set([...arr1,...arr2])
let union = [...set]
console.log(union)

// 交集
let s1 = new Set(arr1)
let s2 = new Set(arr2)
let insection = [...s1].filter(value=>{
  return s2.has(value)
})
console.log(insection)

// 差集
let s3 = new Set(arr1)
let s4 = new Set(arr2)
let intersection = [...s3].filter(value=>{
  return !s4.has(value)
})
console.log(intersection)
