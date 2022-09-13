function alphabetWar(fight)
{
  let arr = fight.split('')
  let arrL = 0
  let arrR = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == 'w'){
      arrL += 4
    } else if(arr[i] =='p'){
      arrL += 3
    }else if(arr[i] == 'b'){
      arrL += 2
      }else if (arr[i] == 's'){
       arrL += 1
      } else if (arr[i] == 'm'){
      arrR += 4
    } else if(arr[i] =='q'){
      arrR += 3
    }else if(arr[i] == 'd'){
      arrR += 2
      }else if (arr[i] == 'z'){
       arrR += 1
      }
  }
  if (arrL > arrR){
    return "Left side wins!"
  }else if (arrR > arrL){
    return "Right side wins!"
  }else {
 return "Let's fight again!"
  }
}