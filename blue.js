function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    //let total = blueStart + redStart
    let ttlBlue = blueStart - bluePulled
    let ttlRed = redStart - redPulled
    return ttlBlue / (ttlBlue + ttlRed)
    
  }