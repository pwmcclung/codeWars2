function likeOrDislike(buttons) {
    // this uses the reduce method and a ternary operator to compare the items in the buttons array, 
    // it asks if y equals x, if so return Nothing if not return y
    return buttons.reduce((x, y) => y === x ? Nothing : y, Nothing)
  
  }