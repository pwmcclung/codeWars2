function arrayToTree(array, i = 0) {
    if (i >= array.length) return;
    return new TreeNode(
      array[i],
      arrayToTree(array, 2 * i + 1),
      arrayToTree(array, 2 * i + 2)
    );
  }