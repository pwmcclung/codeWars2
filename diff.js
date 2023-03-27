function getAges(sum,difference){
    if (sum < 0 || difference <0 ){
      return null
    }
    let sumHalf = sum / 2
    let difHalf = difference / 2
    let one = sumHalf + difHalf
    let two = sumHalf - difHalf
    if (one < 0 || two < 0){return null}
    return [one, two]
  };