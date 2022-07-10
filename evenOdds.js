function capitalize(s){
    let arr = s.split('')
    let evens = []
    let odds = []
    for(let i = 0; i < arr.length; i++){
      if (i % 2 == 0){
        evens.push(arr[i].toUpperCase())
      }else{
        evens.push(arr[i])
      }
    }
 for(let j = 0; j < arr.length; j++){
      if (j % 2 != 0){
        odds.push(arr[j].toUpperCase())
      }else{
        odds.push(arr[j])
      }
    }
    return [evens.join(''), odds.join('')]
 }