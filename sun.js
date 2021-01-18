function flatten(root) {
    let newArr = JSON.stringify(root).match(/\-?\d+/g);
    if (newArr) {
      newArr = [...new Set(newArr.map(Number))].sort((a, b) => a - b);
      let head = new ListNode(newArr.shift());
      let node = head;
      while (newArr.length) {
        node.next = new ListNode(newArr.shift());
        node = node.next;
      }
  
      return head;
    }
    return newArr;
  };