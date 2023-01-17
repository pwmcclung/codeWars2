function sumCubes(n){
    let count = 1
    let arr = []
    while (count <=n){
      arr.push(count)
      count++
    }
    let cubeArr =[]
    for (let i = 0; i < arr.length; i++){
      cubeArr.push(Math.pow(arr[i], 3))
    }
    let summedArr = cubeArr.reduce((a,b) => a + b, 0)
    return summedArr
  }