function bump(x){
    let arr = x.split('')
    let count = 0
    for( let i = 0; i < arr.length; i++){
      if (arr[i] =='n'){
        count++
      }
    }
    if (count < 16){
      return 'Woohoo!'
    }else{
      return 'Car Dead'
    }
    
  }