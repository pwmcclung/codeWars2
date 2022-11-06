function autocomplete(input, dictionary){
    input = input.replace(/[^a-zA-Z]/gi, "")
    let arr = []
    for (let i = 0; i < dictionary.length; i++){
      if (dictionary[i].slice(0, input.length).toLowerCase() === input.toLowerCase()){
        arr.push(dictionary[i])
      }
    }
    return arr.slice(0, 5)
  }