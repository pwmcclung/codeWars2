function dbSort(a){
    let numArr = []
    let letArr = []
    for (let i = 0; i < a.length; i++){
      if (typeof(a[i]) == 'string'){
        letArr.push(a[i])
        }else if (typeof(a[i]) == 'number'){
          numArr.push(a[i])
        }
    }
    let numSort = numArr.sort(function(a,b) {return a - b})
    let letSort = letArr.sort()
    return numSort.concat(letSort)
    }