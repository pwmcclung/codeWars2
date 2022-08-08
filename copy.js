function hasUniqueChars(str){
    let arr1 = str.split('')
    let copy1 = arr1.slice()
    let newArr = copy1.filter((item, index) => copy1.indexOf(item) === index)
    if (copy1.length == newArr.length){
      return true
    }else{
      return false
    }
    }