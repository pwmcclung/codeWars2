function findDup( arr ){
    let dupCount = arr.filter((ele,index,arr)=>arr.indexOf(ele)!= index)
    return Number(dupCount)
    }