function fizzBuzzCuckooClock(time) {
  let times = {'01': 1, '02': 2, '03':3, '04':4, '05': 5, '06':6, '07':7, '08':8, '09':9, '10':10, '11':11, '12':12, 
             '13':1, '14':2, '15':3, '16':4, '17':5, '18':6, '19':7, '20':8, '21':9, '22':10, '23':11, '24':12, '00': 12};
  
  let arr = time.split(':');
  let count = arr.map(x => times[x] || 0);
  let count2 = count[0];
  let word = '';
  
  
  
  if (arr[1] === '00' || arr[0] === '00'){
    word =  `Cuckoo `.repeat(count2).trim();  
  } else if (arr[1] === '30'){
    word =  'Cuckoo';
  } else if (arr[1] !== '00' && arr[1] !== '30'){
    if (parseInt(arr[1]) % 3 === 0 && parseInt(arr[1]) % 5 === 0){
    word = 'Fizz Buzz';
  }else if (parseInt(arr[1]) % 3 === 0){
    word  = 'Fizz';
  }else if (parseInt(arr[1]) % 5 === 0){
    word =  'Buzz';
  }else{
    word = 'tick';
  }

 }
 return word;
  
}
