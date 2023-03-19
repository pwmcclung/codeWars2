function well(x){
  let newArr = x.flat()
 let count = 0
 for(let i = 0; i < newArr.length; i++){
   if (String(newArr[i]).toLowerCase() === 'good'){
     count++
   }
 }
if (count <1){
  return 'Fail!'
}else if (count >0 && count <3){
  return 'Publish!'
}else{
  return 'I smell a series!'
}
}