solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    
    let m1 = givenMass1 * 0.001 / molarMass1;
   let m2 = givenMass2 * 0.001 / molarMass2; 
   let tmp = temp + 273.15
   let r = 0.082;
   return (((m1 + m2) * r * tmp) /volume)* 1000;
   
   
 }
 