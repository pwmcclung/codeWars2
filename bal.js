let  num = number.toString();
  let len = Math.round(num.length / 2);
  let reduce = arg => arg.split("").reduce((a, b) => a + parseFloat(b), 0);
  if (num.length < 3) return "Balanced";
  if (num.length % 2 == 0)
    return reduce(num.slice(0, len - 1)) === reduce(num.slice(len + 1))? "Balanced": "Not Balanced";
  return eval(num.slice(0, len - 1) + "===" + num.slice(len))? "Balanced" : "Not Balanced";
//   let arr = String(number).split('')
//   let ans =''
//   if (number <100){
//     ans ='Balanced'
//   }
// //   if (arr.length == 1){
// //     ans == 'Balanced'
// //   }
// //    if (arr.length == 2){
// //      if (Number(arr[0]) === Number(arr[1])){
// //        ans == 'Balanced'
// //      }else if (Number(arr[0]) != Number(arr[1])){
// //        ans == 'Not Balanced'
// //      }
// //   }
//   if (arr.length >=3){
  
//   if (arr.length % 2 != 0){
//     let mid0 = arr.length /2 - 0.5
//     let left0 = arr.slice(0, mid0)
//     let rite0 = arr.slice(mid0 +1,)
//     let lSum = left0.reduce((a, b) => Number(a) + Number(b))
//     let rSum = rite0.reduce((a, b) => Number(a) + Number(b))
//     if (lSum == rSum){
//      ans = 'Balanced'
//     }else if(lSum != rSum) {
//       ans = 'Not Balanced'
//     }
    
//   }else if (arr.length % 2 ==0){
//   let mid1 = (arr.length / 2) - 1
//   let mid2 = (arr.length / 2) + 1
//   let left = arr.slice(0, mid1)
//   let right = arr.slice(mid2,)
//    let lEvSum = left.reduce((a, b) => Number(a) + Number(b))
//     let rEvSum = right.reduce((a, b) => Number(a) + Number(b))
//    if (lEvSum == rEvSum){
//      ans = 'Balanced'
//     }else if (lEvSum != rEvSum){
//       ans = 'Not Balanced'
//     }
//  } 
// return ans
//     }