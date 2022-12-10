function searchNames( logins ){
    let arr = []
    arr = logins.filter((x) => x[0].endsWith('_') )
    return arr
  }