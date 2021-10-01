function aspectRatio(x,y){
    let newX = Math.ceil((16/ 9) * y)
    return [newX, y]
}