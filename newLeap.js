function yearDays(year){
    let year1 = Math.abs(year)
    if (year1 % 4 != 0){
      return `${year} has 365 days`
    }
  if (year1 % 4 == 0 && year1 % 100 != 0){
    return `${year} has 366 days`
  }else if (year1 % 4 ==0 && year1 %100 ==0){
    if (year1 % 400 ==0){
      return `${year} has 366 days`
    }else{
      return `${year} has 365 days`
    }
  }
 


  }