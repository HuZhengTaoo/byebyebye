// 添加hash表
function deepClone(obj,hash = new WeakMap()){
  if(obj == undefined) return obj;
  if(typeof obj !== 'object') return obj;
  if(obj instanceof RegExp) return new RegExp(obj);
  if(obj instanceof Date) return new Date(obj);
  // 如果之前的hash表里面有值，就直接返回
  let val = hash.get(obj);
  if(val){ 
      return val
  }
  let cloneObj = new obj.constructor; 
  hash.set(obj,cloneObj); 
  for(let key in obj){ 
      if(obj.hasOwnProperty(key)){     
        // hash 保证是相同的表
          cloneObj[key] = deepClone(obj[key],hash);
      }
  }
  return cloneObj;
}
let obj = {a:1};
obj.b = obj;
console.log(deepClone(obj));
