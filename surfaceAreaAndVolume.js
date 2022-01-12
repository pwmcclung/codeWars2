function getSize(width, height, depth){

    let one =  2 * (depth * width)
    let two =  2  * (depth * height)
    let three = 2 * (width * height)
    
    let area = one + two + three
    let volume = (width * height * depth)
    
    return Array(area, volume)
    
    }