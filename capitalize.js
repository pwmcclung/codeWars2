var capitalizeTitle = function(title) {
    // title = title.toLowerCase()
    let arr = title.split(' ')
    let newArr = []
    for (let i = 0; i<arr.length; i++){
        if (arr[i].length >= 3){
            let first = arr[i].slice(0,1).toUpperCase() 
            let rest = arr[i].slice(1,).toLowerCase() 
            newArr.push(first + rest)        
        }else{
            newArr.push(arr[i].toLowerCase())
        }
    }
    return newArr.join(' ')
};