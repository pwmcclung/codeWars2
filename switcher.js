function switcher(x){
    //first I created an object with numbers and their corresponding letters(ket value pairs)
    let letters = { 1:'z', 2:'y', 3:'x', 4:'w', 5:'v', 6:'u', 7:'t', 8:'s', 9:'r',10:'q', 11:'p', 12:'o', 13:'n', 
                  14:'m',15:'l', 16:'k', 17:'j', 18:'i', 19:'h', 20:'g', 21:'f', 22:'e', 23:'d', 24:'c', 25:'b', 26:'a', 27:'!', 28:'?', 29:' '}
    // next I intialized a new variable and used the map array method to map each letter in the x array with 
    // a letter in the letters object. 
    let newArr = x.map((e) => letters[e])
    // finally I returned the newArr and used the join method to turn it into a string
    return newArr.join('')
  }