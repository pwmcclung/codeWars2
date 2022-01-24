function remove (string) {
    let arr = string.split('')
   if (arr[arr.length -1] === '!'){
     arr.pop()
   }
   return arr.join('')
  }