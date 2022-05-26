function spanishSent(arr) {
  
    count = 0 
    for (let i = 0; i < arr.length; i++){
      if ((arr[i][0] === '¿' && arr[i][arr[i].length -1] ==='?')||
        (arr[i][0] === '¡' && arr[i][arr[i].length -1] ==='!')){
        count ++
      }
    }
    if (count > 1 || count == 0){
    return `¡${count} spanish sentences here and hasta la vista, baby!`
    }else {
      return `¡${count} spanish sentence here and hasta la vista, baby!`
    }
  }