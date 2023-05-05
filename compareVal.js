function compare(s1, s2) {
  //checking for a null string
   if (s1 == null){
    s1 = '';
  }
  if (s2 == null){
    s2 = ''
  }
  
  // turn s1 and s2 to uppercase
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();
  
  //testing to see if s1 or s2 contains unauthorized characters
  if (/^[a-zA-Z]+$/.test(s1)){
    s1 = s1;
  }else{
    s1 = '';
  }
  if (/^[a-zA-Z]+$/.test(s2)){
    s2 = s2;
  }else{
    s2 = '';
  }
 
  //initializing some variables
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let sum1 = 0;
  let sum2 = 0;
  
  // for loops to calculate the ascii character code value of each string
  for (let i = 0; i < arr1.length; i++){
   sum1 = sum1 + arr1[i].charCodeAt();
    
  }
  for (let i = 0; i < arr2.length; i++){
   sum2 = sum2 + arr2[i].charCodeAt();
    
  }
  
 //comparing those values and returning true if equal, false if not equal
  if (sum1 == sum2){
    return true;
  }
  return false;

 }