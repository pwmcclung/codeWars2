function wordSearch(word, text){
    return text.search("\\b" + word + "\\b") > -1;
  }