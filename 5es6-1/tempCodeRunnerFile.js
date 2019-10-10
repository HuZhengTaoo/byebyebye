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