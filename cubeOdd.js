function cubeOdd(arr) {

    let cube = []
    let arr1 = []
    for (let i = 0; i <arr.length; i++){
      if ( typeof arr[i] == 'number' && arr[i] % 2 != 0){
        cube.push(arr[i] ** 3)
      }else if ( typeof arr[i] != 'number'){
        return undefined
      }
    } 
      if (cube.length >0){
       arr1 = cube.reduce((a, b) => a + b)
    }
    
    return arr1 || 0
    }