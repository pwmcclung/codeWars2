function menFromBoys(arr){
    let men = []
    let boys = []
    for(let i = 0; i <arr.length; i++){
      if (arr[i] % 2 ==0){
        men.push(arr[i])
      }else if (arr[i] % 2 != 0){
        boys.push(arr[i])
      }
    }
    let menSorted = men.sort(function(a,b) {return  a - b })
    let boysSorted = boys.sort(function(a, b) {return  b - a })
    let both = menSorted.concat(boysSorted)
   return both.filter((x, index) => both.indexOf(x) === index)
  }