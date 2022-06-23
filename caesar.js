var CaesarCipher = function (shift) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    this.encode = (str)=>{
      return str.toLowerCase().replace(/[a-z]/g,v=>{
        return alphabet[Math.abs((alphabet.indexOf(v)+shift)%26)]
      }).toUpperCase()
    }
    this.decode = (str)=>{
      return str.toLowerCase().replace(/[a-z]/g,v=>{
        if ((alphabet.indexOf(v)-shift)<0) return alphabet[26+(alphabet.indexOf(v)-shift)]
        return alphabet[(alphabet.indexOf(v)-shift)]
      }).toUpperCase()
    }
    return this
  };