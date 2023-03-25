function duplicates(arr) {
 let newArr = arr.filter((item, index)=> arr.indexOf(item) !== index)
 let newerArr = [...new Set(newArr)]
 return newerArr || []
}