function findDup( arr ){
    let dupCount = arr.filter((ele,index,arr)=>arr.indexOf(ele)!= index)
    return Number(dupCount)
    }

function findDup( arr ){
        arr.sort();
        
        for(let i = 0; i < arr.length; i += 1) {
          if(arr[i] == arr[i+1]) {
            return arr[i]
          }
        }
      }