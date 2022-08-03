var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if (count <0){
        return `${count}<0`
      }else if (count == 0){
        return `0=0`
      }else{
      let arr = []
      for (let i = 0; i <= count; i++){
        arr.push(i)
      }
      let sum = arr.reduce((a,b) => a + b)
      let firstPart = arr.join('+')
      let newSent = `${firstPart} = ${sum}`
      return newSent
     }
    };
  
    return SequenceSum;
  
  })();