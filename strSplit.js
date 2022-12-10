function solution(str){
    if (str.length % 2 !=0 ){
      str = str + '_'
    }
    let res = str.match(/.{1,2}/g) ?? [];
   return res
   
 }