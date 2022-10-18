function killcount(counselors, jason){
    let newArr = []
    for (let i = 0; i < counselors.length; i++){
      if (counselors[i][1] < jason){
        newArr.push(counselors[i][0])
      }
    }
   return newArr
  }