function encode(plaintext){
  plaintext = plaintext.toLowerCase()
  console.log(plaintext)
  let plaintextArr = plaintext.split('')
 let numLet = {'a':2, 'b':1, 'c':2, 'd':3, 'e':4, 'f':5, 'g':6, 'h':7, 'i':8, 'j':9, 'k':10, 'l':11, 'm':12, 'n':13, 'o':14, 
              'p':15, 'q':16, 'r':17, 's':18, 't':19, 'u':20, 'v':21, 'w':22, 'x':23, 'y':24, 'z':25}
 let letMap = plaintextArr.map((x)=>numLet[x] || x)
 let newArr =[]
 for (let i = 0; i<letMap.length; i++){

   if (typeof(letMap[i]) != 'number'){
    newArr.push(letMap[i])
   }else if (letMap[i] % 2 ===0 ){
     newArr.push('0')
   }else if (letMap[i] % 2 !== 0){
     newArr.push('1')
   }
 }
  console.log(newArr)
  return newArr.join('')
}