function removeUrlAnchor(url){
    let arr = url.split('')
    let i;
    for (let x of arr){
      if (x == '#')
        i = arr.indexOf(x)
    }
    return arr.slice(0,i).join('')
   
  }