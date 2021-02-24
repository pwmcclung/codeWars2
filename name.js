var greet = function(name) {
    let first = name[0].toUpperCase()
    let second = name.slice(1,).toLowerCase()
    let newName= first+second
    return `Hello ${newName}!`
    
  };