function duckShoot(ammo, aim, ducks){
    let success = Math.trunc(ammo*aim)
    let count = 0
    let arr = ducks.split('')
    let newArr = []
    for (let i = 0; i <arr.length; i++){
      if (arr[i] == '|' || arr[i] == '~'){
        newArr.push(arr[i])
      }else if (arr[i] == '2' && count < success){
        newArr.push('X')
        count ++
      }else if (arr[i] == '2'&& count == success){
        newArr.push(arr[i])
      }
    }
 return newArr.join('')
}