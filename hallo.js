function validateHello(greetings) {
    greetings = greetings.toLowerCase()
    res =  /(hello)|(ciao)|(salut)|(hallo)|(hola)|(ahoj)|(czesc)/.test(greetings) 
    return res
  }