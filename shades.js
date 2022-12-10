function shadesOfGrey(n) {
    let shadesArray = [];
  
    for (let i = 1; i <= Math.min(n, 254); i++) {
      let grey = ("0" + i.toString(16)).slice(-2);
      shadesArray.push("#" + grey + grey + grey);
    }
  
    return shadesArray;
  }