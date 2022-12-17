function dataReverse(data) {
    let dataSize = 8
    let resArr = data.reduce((x, el,i) =>{
      let chunkInd = Math.floor(i/dataSize)
      
      if (!x[chunkInd]){
        x[chunkInd] = []
      }
      x[chunkInd].push(el)
      return x
    }, [])
    let newArr = []
    for(let i = resArr.length; i >=0 ; i--){
      newArr.push(resArr[i])
    }
    newArr = newArr.flat()
   let arr1 =[]
   for (let i = 0; i < newArr.length; i++){
     if (newArr[i] != undefined){
       arr1.push(newArr[i])
     }
   }
    return arr1
  }