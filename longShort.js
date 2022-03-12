function solution(a, b){
    let short;
    let long;
    if (a.length < b.length){
      short = a 
      long = b
    }else{
      long = a 
      short = b
    }
    return short + long + short
  }