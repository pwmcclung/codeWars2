// code walkthrough 
// this line establishes the function, it takes one parameter x
function high(x){
    // this line creates a dictionary like object that assigns a score to each letter
    let numScore = {'a':1,'b':2, 'c':3, 'd':4, 'e':5,'f':6, 'g':7,'h':8,'i':9, 'j':10, 'k':11,'l':12, 
                   'm':13, 'n':14,'o':15, 'p':16,'q':17,'r':18,'s':19,'t':20, 'u':21,'v':22, 'w':23, 'x':24, 'y':25, 'z':26, '':0}
   //this line uses the split method to split the x string into an array of words
   let wordArr = x.split(' ')
   //this line creates an empty array called newArr
   let newArr = []
   //a for loop, it iterates over the word array, and 
    for (let i = 0; i <wordArr.length; i++){
        // uses the split method to break each word down into an array of letters, then
        //uses the map method to map each element to its numscore
        //it then uses reduce to add each words value
        //then uses push to add that value to the newArr
      newArr.push(wordArr[i].split('').map((e)=> numScore[e]).reduce((a,b)=> a + b))
     
    }
    
    //to find the biggest number, the math.max method is called on the newArr
    let biggest = Math.max(...newArr)
   //then the index of biggest is assigned to indy using the index of method
   let indy = newArr.indexOf(biggest)
   //then using slicing, the word in wordArr at the index of indy is returned
    return wordArr[indy]
    
   
  
  }