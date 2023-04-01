function deepCount(a){
 let arrayCount = a.reduce((x,y) => x + (Array.isArray(y) ? deepCount(y):0), a.length);
  return arrayCount
}