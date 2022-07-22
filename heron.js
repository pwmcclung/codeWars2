function heron(a, b, c) {
    let s = (a + b + c) / 2
    let f = Math.sqrt((s*(s-a)*(s-b)*(s -c)))
    return f;
  }