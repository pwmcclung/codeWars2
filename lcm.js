var lcm = function (...args) {
    let greatestCommonDenom = (a, b) => b ? greatestCommonDenom(b, a % b) : Math.abs(a);
   let lowestCommonMult = (a, b) => Math.abs(a * b) / greatestCommonDenom(a, b);
    return args.reduce(lowestCommonMult,1)
  };