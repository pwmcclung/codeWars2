const sequenceSum = (begin, end, step) => {
  if (begin > end ){
    return 0
  }else{
    let newArr = []
    for (let i = begin; i <=end; i += step){
      newArr.push(i)
    }
    let sum = newArr.reduce((a, b) => a + b)
    return sum
  }
};
