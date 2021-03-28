var duplicateZeros = function(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++){
        if (arr[i] === 0){
            let previous = arr[i +1]
            for (let j  = i + 2; j <n; j++){
                let temporary = arr[j]
                arr[j] = previous
                previous = temporary
            }
            arr[++i] = 0
        }
    }
    
}
