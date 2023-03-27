function diffBig2(arr) {
    var i = 0, j;
  
      while (i < arr. length) {  
          j = i + 1;  
          while (j < arr. length) {
  
              if (arr[j] < arr[i]) { 
                  var temp = arr[i];  
                  arr[i] = arr[j];  
                  arr[j] = temp;  
              }  
              j++;  
          }  
          i++;  
      }  
    return arr[arr.length - 1] - arr[arr.length - 2]
  }