const findAll = (array, n) => {
    let ind = [], i = -1;
      while ((i = array.indexOf(n, i+1)) != -1){
          ind.push(i);
      }
      return ind || []
  }