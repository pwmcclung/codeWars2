function toWeirdCase(string){
  
    let arr = string.split(' ')
    let newArr = arr.map((x,i)=> x.split('').map((j,k)=>(k%2===0 ? j.toUpperCase() : j.toLowerCase())).join(''))
    return newArr.join(' ')
    
}

