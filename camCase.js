String.prototype.camelCase=function(){
    let sent = this.toString();
    
    let arr = sent.trim().split(' ')
    let newArr = []
   
    for (let i = 0; i < arr.length; i++){
     newArr.push(arr[i].slice(0,1).toUpperCase().concat(arr[i].slice(1,)))
     
    }
   return newArr.join('')
     
  }