// 事务 开始的时候 做某件事 结束的时候在做某件事

const perform = (anymethod,wrappers) =>{
  wrappers.forEach(wrap => {
    wrap.initilizae()
  })
  anymethod()
  wrappers.forEach(wrap => {
    wrap.close()
  })
}

perform (() => {
  console.log('说话')
},[
  {
    // wrapper
    initilizae(){
      console.log('您好')
    },
    close(){
      console.log('再见')
    }
  },
  {
    // wrapper
    initilizae(){
      console.log('您好1')
    },
    close(){
      console.log('再见2')
    }
  }
])




