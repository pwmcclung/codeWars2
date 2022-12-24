function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)){
      return true
    }else{
      return false
    }
  }