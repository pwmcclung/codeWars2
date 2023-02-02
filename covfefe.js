function covfefe(str){
    let word = /coverage/ig;
    if (str.includes(word)){
      return str.replace(word, 'covfefe')
    }else{
      return str + ' covfefe'
    }
  }