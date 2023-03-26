function cookingTime(weight){
let grams = weight * 1000;
if (grams === 0){
  return 'There is no chicken!'
}
let sets = grams / 112.50
let unAd = Math.ceil(sets * 5)
if (unAd % 5 != 0){
  while(unAd % 5 != 0){
    unAd = unAd + 1
  }
}
 let totalTime = unAd + 20
 
 if (totalTime <60){
   return `${totalTime} mins`
  }
  
let decFirst = (totalTime/ 60).toString().split('.')[0]
let mins = totalTime - (decFirst * 60)

if (decFirst === 1 && mins === 0){
  return `${decFirst} hr`
}else if (decFirst <2 && mins >0){
  return `${decFirst} hr ${mins} mins`
}else if (decFirst >1 && mins ===0){
  return `${decFirst} hrs`
}else if (decFirst >1 && mins > 0){
  return `${decFirst} hrs ${mins} mins`
}
}