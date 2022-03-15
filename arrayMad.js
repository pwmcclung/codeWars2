function arrayMadness(a, b) {
    let sumA =[]
    let sumB =[]
    //square array 1
    for (let i = 0; i < a.length; i++){
      let c = a[i] **2
      sumA.push(c)
    }
   //cube array 2
     for (let i = 0; i < b.length; i++){
      let d = b[i] **3
      sumB.push(d)
    }
   //add array 1's elements
  const initialValue = 0;
  const sumWithInitial1 = sumA.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
    
   //add array 2's elements 
  const sumWithInitial2 = sumB.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
    //compare them 
  if (sumWithInitial1 > sumWithInitial2){
    return true
  }else{
    return false
  }
  }