function automorphic(n){
    let square = n * n + '' 
    let strN = String(n)
    let strSquare = String(square)
    if (strSquare.endsWith(strN)){
      return 'Automorphic'
    }else{
      return 'Not!!'
    }
  }