function sequenceSum(begin, end, step){
    let total = 0;
    for (let i = begin; step > 0 ? i <= end : i >= end; i += step) total += i;
    return total;
  }