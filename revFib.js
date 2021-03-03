function reverseFibo(n) {
    let newArr = [0, 1];
    for (let i = 1; i < n - 1; i++) {
      newArr.push(newArr[i - 1] + newArr[i]);
    }
    return newArr.reverse().join(``);
  }