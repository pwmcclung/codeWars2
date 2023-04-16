var ownedCatAndDog = function(catYears, dogYears) {
  let ownedCat = 0;
  let ownedDog = 0;
  
  
if (catYears < 15 && catYears >0){
    ownedCat = 0;
  } else if (catYears == 15){
    ownedCat = 1;
  }else if (catYears == 24){
     ownedCat = 2;
  }else{
    ownedCat = 2 + ((catYears - 24) / 4);
  }
  
  //dog
  if (dogYears < 15 && dogYears >0){
    ownedDog = 0;
  } else if (dogYears == 15){
    ownedDog =  1;
  }else if (dogYears == 24){
    ownedDog =  2;
  }else{
    ownedDog = 2 + ((dogYears - 24) / 5);
  }
  
  //adjustment
  if (ownedCat > 0 && ownedCat < 1){
    ownedCat = 1;
  }
  if (ownedDog > 0 && ownedDog < 1){
    ownedDog = 1;
  }
  
  
  return [ Math.trunc(ownedCat), Math.trunc(ownedDog)];
}
