var toGoatLatin = function(sentence) {
    let arr = sentence.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        let f = arr[i].slice(0,1)
        let back = arr[i].slice(1, arr[arr.length] )
        if (f == 'a' || f == 'e'||f =='i'||f =='o'||f =='u'||f == 'A' || f == 'E'||f =='I'||f =='O'||f =='U'){
            newArr.push(f + back + 'ma')
        }else{
            newArr.push(back + f+ 'ma')
        }
    }
    
     let newArr1 =[]
     let text = 'a'
     for (let j = 0; j < newArr.length; j++){
         
         newArr1.push(newArr[j] + text)
         text += 'a'
         
     }
    return newArr1.join(' ')
};