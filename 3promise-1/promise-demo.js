// eg.1
let p = new Promise((resolve, reject) => {
  console.log(1)
})

console.log(2)

p.then(() => {

},()=>{

})
// executor 是立即执行的
// 1 2 

// eg.2
let p = new Promise((resolve, reject) => {
  console.log(1)
  resolve('发工资了')
})

console.log(2)

p.then(() => {
  console.log('成功',data)
},()=>{
  console.log('失败')
})
// 1 2 成功 发工资了