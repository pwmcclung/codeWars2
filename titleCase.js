function titleCase(title, minorWords) {
  if(title.length === 0 ){
    return '';
  }


  let lowerCase = title.toLowerCase();
  let arr = lowerCase.split(' ');
  minorWords = typeof minorWords !== 'undefined' ? minorWords.toLowerCase().split(' ') : [ ];

  let firstWord = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1,).toLowerCase();
  for(let i = 1; i < arr.length; i++){
    if (minorWords.includes(arr[i])){
      arr[i] = arr[i];
      
    }else{
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,).toLowerCase();
    }
  };
  if (arr.length <2){
    return firstWord;
  }else{
    return `${firstWord} ${arr.slice(1,).join(' ')}`;
  }
  
}