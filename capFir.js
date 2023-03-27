//goal: create a function that takes an input string and returns a string where all the uppercase
//words are at the front and all the lowercase words are at the end
// they should be in order of appearance
//if word starts with number or character skip it

function capitalsFirst(str){
    let arr = str.split(' ')
    let newArr1=[]//this array for uppercase
    let newArr2=[]//this array for lowercase
    let newArr3 =[]//this array for words that begin with symbol or number
    let alpha = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n','o','p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x','y', 'z','A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 
    'J', 'K', 'L', 'M', 'N','O','P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X','Y', 'Z']
    for (let i = 0; i <arr.length; i++){
      if ((arr[i][0] != arr.filter((x) => alpha.includes(x))) {
        newArr3.push(arr[i]))

      if (arr[i][0] == arr[i][0].toUpperCase() && arr[i][0] == /[a-bA-B]/){
        newArr1.push(arr[i])
      }else if (arr[i][0] == arr[i][0].toLowerCase() && arr[i][0] == /[a-bA-B]/){
        newArr2.push(arr[i])
      }else if (arr[i][0] != arr.filter((x) => alpha.includes(x))) {
        newArr3.push(arr[i])
      }
    }
    return newArr1.concat(newArr2).join(' ')
}