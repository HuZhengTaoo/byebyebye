/**
 * 1
 */
console.log(a)

var a = 1

// undefined
/**
 * 2
 */
console.log(a)

let a = 1

//  Cannot access 'a' before initialization

/**
 * 3
 */
var a = 1

window.a === 1

/**
 * 4
 */

 let a = 1
  {
   console.log(a)
   let a = 2  // 暂存死区
  }

/**
 * 5 异步循环
 */

 for(var i = 0 ; i < 10; i++){
   setTimeout(() => {
     console.log(i)
   })
 }
 // 都是10 原因在于js执行机制

 for(var i = 0 ; i < 10; i++){
   (function(i){
     setTimeout(() => {
      console.log(i)
     })
   })(i) // IIFR 立即执行函数
 }

 for(let i = 0 ; i < 10; i++){
   setTimeout(() => {
     console.log(i)
   })
 }

 /**
 * 6 cosnt
 */

 const a = {}
 a = [] 
 a = {}
 //Assignment to constant variable.
 const a = {}
 a.b = 1 // 这个是可以得到