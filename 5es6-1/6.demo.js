let obj = {}
let val = 'zf'
Object.defineProperty(obj,'name',{
  configurable:false,
  enumerable:true,
  get(){
    return val 
  },
  set(newVal){
    val = newVal
  }
})
delete obj.name
console.log(obj.name)