function noBoringZeros(n) {
    n = n.toString().split("")
    for(let i = n.length-1 ; i >=0; i --){
      if(n[i]=="0"){
        delete n[i]
      }else{
        break
      }
    }
    return Number(n.join(""))
  }