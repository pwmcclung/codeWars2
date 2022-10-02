function stringMerge(string1, string2, letter){
    let indy1 = string1.indexOf(letter)
    let indy2 = string2.indexOf(letter)
    let first = string1.slice(0, indy1)
    let second = string2.slice(indy2)
    return first.concat(second)
  }