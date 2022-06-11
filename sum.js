function maxSum(arr, range) {
    const tree = arr.slice(0);
    for (let i = 0, n = arr.length; i < n; i++) {
      let j = i | (i + 1);
      if (j < n) {
        tree[j] += tree[i];
      }
    }
    let max = -Infinity;
    for (let [start, end, num] of range) {
      update(start, num - arr[start], arr.length, tree);
      arr[start] = num;
      const summed = sum(end, tree) - sum(start - 1, tree);
      if (summed > max) {
        max = summed;
      }
    }
    return max;
  }
  
  function sum(i, tree) {
    let sum = 0;
    while (i >= 0) {
      sum += tree[i];
      i &= i + 1;
      i--;
    }
    return sum;
  }
  
  function update(i, v, n, tree) {
    while (i < n) {
      tree[i] += v;
      i |= i + 1;
    }
  }