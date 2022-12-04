function lastSurvivor(letters, coords) {
    let letArr = [...letters]
    for (let i = 0; i < coords.length; i++){
      letArr.splice(coords[i],1)
    }
     return letArr.join('')
    }