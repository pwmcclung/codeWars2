function solution(string,limit){
    if (string.length > limit){
      return string.slice(0, limit) + '...';
    }else{
      return string
    }
   
  }