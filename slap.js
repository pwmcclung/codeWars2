function bald(x){
    let headArr = x.split('')
  let head = Array(x.length).fill('-').join('')
  let hair = headArr.filter(x => x === '/')
  let ans = hair.length
  if (  ans === 0){
    return [head,"Clean!" ]
   
  }else if ( ans  === 1){
    return [head,"Unicorn!" ]
   
  }else if ( ans  === 2){
     return [head,"Homer!"]
    
  }else if ( ans  >2 &&  ans  <6){
     return [head,"Careless!" ]
    
  }else if (ans > 5){
     return [head,"Hobo!" ] 
  }

}