function printerError(s) {
    let l = s.length
    let count = 0
    let arr = s.split('')
    let u = ['n','o','p','q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < u.length; j++){
        if (arr[i] == u[j]){
          count++
        }
    }
      
}
  return `${count}/${l}`
  }