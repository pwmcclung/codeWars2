function vowelIndices(word){
    let newArr = []
      let arr = word.split('');
      for (let i=0;i<word.length;i++){
      if (/[aeiouy]/gi.test(arr[i])) {newArr.push(i+1)}
      }
      return newArr
    }