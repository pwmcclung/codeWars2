function divisibleCount(x, y, k) {
    return Math.floor(y/k) - Math.floor((x -1) / k)

    //This one works for small numbers but times out for big nums
  //    let newArr = []
  //    let count = 0
  //    for (let i =  x; i<= y; i++){
  //      if (i % k ==0)
  //     count ++
  //    }
  //   return Math.floor(y/k) - Math.floor((x-1)/k)
  // //   let count = 0
  //   for (let x of newArr){
  //     if (x % k ==0 ){
  //       count ++
  //     }
  //   }
   // return count
  }