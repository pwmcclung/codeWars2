function computerToPhone(numbers){
    let nums = {0:0, 7:1, 8:2, 9:3, 4:4, 5:5, 6:6, 1:7, 2:8, 3:9}
    let arr = numbers.split('')
    let newArr = arr.map((e) => nums[e])
    if (newArr.length == 0){
      return ''
    }else{
    return newArr.join('')
    }
  }