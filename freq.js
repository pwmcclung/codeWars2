function freqSeq(str, sep) {
    let arr = str.split('')
    let newO = {}, value;
    for (let i = 0; i< arr.length; i++){
      value = arr[i];
      if (value in newO){
        newO[value]++;
      }else{
        newO[value] = 1;
      }
    }
    let newArr = arr.map(x=>newO[x]);
    return newArr.join(`${sep}`)
  }
  