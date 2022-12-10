
function vaporcode(string) {
    string = string.replace(/ /g, "")
    string = string.toUpperCase()
    let arr = string.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == arr.indexOf(arr[0])){
        newArr.push(arr[i])
      }else{
        newArr.push('  ' )
        newArr.push(arr[i])
      }
    }
    return newArr.join('').trimStart()
  }