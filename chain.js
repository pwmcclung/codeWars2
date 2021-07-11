let add = function(n) {
    let nums = x => add(n + x);
    nums.valueOf = () => n;
    return nums;
  };
  