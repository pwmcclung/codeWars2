function dropCap(n) {
    let arr = n.split(' ')
   let newArr = []
   for (let i = 0; i < arr.length; i++){
     if (arr[i].length < 3){
       newArr.push(arr[i])
     }else{
       let first = arr[i][0].toUpperCase()
       let second = arr[i].slice(1,).toLowerCase()
       newArr.push(first.concat(second))
     }
   }
    return newArr.join(' ')
  }