function balance(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let first = arr1.reduce((a, b) => ((a[b] = (a[b] + 1) | (0 + 1)), a), {});
    let second = arr2.reduce((a, b) => ((a[b] = (a[b] + 1) | (0 + 1)), a), {});
    return (
      Object.values(first)
        .sort()
        .toString() ===
      Object.values(second)
        .sort()
        .toString()
    );
    }