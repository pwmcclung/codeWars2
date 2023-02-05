function order(words){
    let arr = words.split(' ')
     var re = /\D/g;
      
      arr.sort(function(a, b) {
          return(parseInt(a.replace(re, ""), 10) - parseInt(b.replace(re, ""), 10));
      });
      return(arr.join(' '));
  }