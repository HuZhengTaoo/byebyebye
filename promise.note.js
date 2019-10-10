var x , y = 2;
console.log(x + y); // NaN


function add (getX,getY,cb){
  var x , y
  getX((xVal)=>{
    x = xVal
    if(y!=undefined){
      cb(x+y)
    }
  })
  getY((yVal)=>{
    if(xVal!=undefined){
      cb(x+y)
    }
  })
}
add(fetchX,fetchY,function(sum){
  console.log(sum)
})


function add(xPromise,yPromise){
  return Promise.all([xPromise,yPromise])
                .then(values=>{
                  return values[0] + values[1]
                })
}

add(fetchX(),fetchY())
.then(function(sum){
  console.log(sum)
})