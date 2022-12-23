function digitalRoot(n){
    let newNum = n - 1
    let modNewNum = newNum % 9
    let newSum = modNewNum + 1
    return newSum
}