//first try 
function spoonerize(words) {
    let arr = words.split(' ')
    let first = arr[0][0]
    let second = arr[1][0]
    let firstEnd = arr[0].slice(1,)
    let secondEnd = arr[1].slice(1,)
    let word1 = second.concat(firstEnd)
    let word2 = first.concat(secondEnd)
    return String(word1 + ' ' + word2)
  
}
//refactored
function spoonerize(words) {
    let arr = words.split(' ')
    return String(arr[1][0].concat(arr[0].slice(1,) +' ' + arr[0][0].concat(arr[1].slice(1,))))
}