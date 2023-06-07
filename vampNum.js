var vampire_test = function(a, b){
  let product = a * b;
  let strA = String(a);
  let strB = String(b);
  let strPro = String(product).split('').sort().join('');
  let str2 = strA.concat(strB).split('').sort().join('');
 if (strPro === str2){
   return true;
 }
  return false;
  
}