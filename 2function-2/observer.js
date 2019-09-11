class Subject{
  //被观察者 小爸爸
  constructor(){
    this.arr = []
    this.state = '我开心'
  }
  attach(o){
    this.arr.push(o)
  }
  setState(newState){
    this.state = newState
    this.arr.forEach(o=>{
      o.update(newState)
    })
  }
}

class Observer{
  //观察者 我 我媳妇
  constructor(name){
    this.name = name
  }
  update(newState){
    console.log(this.name + '小宝宝:' + newState) 
  }
}

let s = new Subject('小宝宝')
let o1 = new Observer('我')
let o2 = new Observer('我媳妇')

s.attach(o1)
s.attach(o2)

s.setState('不开心')