function move_zeros(arrNum, isRight) {
    return isRight || isRight === undefined
      ? arrNum.reduceRight((a, v) => (v === 0 ? [...a, v] : [v, ...a]), [])
      : arrNum.reduce((a, v) => (v !== 0 ? [...a, v] : [v, ...a]), []);
  }