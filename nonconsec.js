function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let x = arr[i];
        let n = arr[i + 1];
        if(n - x !== 1){
           return n;
        };
     };
     return null;
  }