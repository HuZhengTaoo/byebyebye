// map 叫他hash表  散列
// key不能重复
let map = new Map();
map.set({a:1},'123');
map.set('b','456');
map.set({a:1},123);

// 用法同 set方法
console.log(map.get('b'));
// 对象的空间永远不相等，所有key还是唯一的
console.log(map) // Map { { a: 1 } => '123', 'b' => '456', { a: 1 } => 123 } 
// WeakMap key只能是一个对象
