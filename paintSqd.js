var paintLetterboxes = function(start, end) {
  let arr = [];
  let count = start;
  
  while (count <= end){
    
    arr.push(count);
    count += 1;
  }
  

  let newArr = arr.join('').split('');
  
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0; 
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;
  
  for (let i = 0; i < newArr.length; i++){
    if (newArr[i] === '0'){
      count0++;
    }else if (newArr[i] === '1'){
      count1++;
    }else if (newArr[i] === '2'){
      count2++;
    }else if (newArr[i] === '3'){
      count3++;
    }else if (newArr[i] === '4'){
       count4++;
    }else if (newArr[i] === '5'){
      count5++;
    }else if (newArr[i] === '6'){
      count6++;     
     }else if (newArr[i] === '7'){
       count7++;
     }else if (newArr[i] === '8'){
       count8++;
     }else if (newArr[i] === '9'){
       count9++;
     }
  }

  
  let countArr = [ count0, count1, count2, count3, count4, count5, count6, count7, count8, count9 ];
      
  return countArr;

}