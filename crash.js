function name(x){
  return x[0].toUpperCase();
}
let correct = name => /[a-z]/gi.test(name);


function aliasGen(firstN,lastName){
    return correct(firstN[0]) && correct(lastName[0]) ? `${firstName[name(firstN)]} ${surname[name(lastName)]}`:'Your name must start with a letter from A - Z.'
}
