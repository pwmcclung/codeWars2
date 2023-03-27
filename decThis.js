function decipherThis(str) {
    let newStr = str.replace(/\d+/g, v=>String.fromCharCode(v*1))
    let arr = newStr.split(' ')
    let newSent = arr.map(x=>x.length >2 ? x.slice(0,1) + x.slice(-1) + x.slice(2,-1) + x.slice(1,2) :x)
    return newSent.join(' ')
    
   }; 