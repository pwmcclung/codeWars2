Array.prototype.filter = function(func) {
    let newArray = []
  
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) newArray.push(this[i])
    }
  
    return newArray
  }