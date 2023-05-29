iconst sumSquareEvenRootOdd = ns => {
    let arr = [];
    for (let i = 0; i < ns.length; i++){
      if (ns[i] % 2 == 0){
        arr.push(ns[i] ** 2);
      }else{
        arr.push(Math.sqrt(ns[i]));
      }
    }
    let sum = arr.reduce((a,b) => a + b, 0);
    return Number(sum.toFixed(2));
  };