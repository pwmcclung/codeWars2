function multiply(a, b)
2
{
3
let newArr = [];
4
  a = a.split``.reverse();
5
  b = b.split``.reverse();
6
  
7
  for (let i = 0, one = a.length; i < one; i++) {
8
    for (let j = 0, two = b.length; j < two; j++) {
9
      let three = a[i] * b[j];
10
      const four = newArr[i + j];
11
      newArr[i + j] = four ? four + three : three;
12
    }
13
  }
14
​
15
  for (let i = 0, l = newArr.length; i < l; i++) {
16
    let mover = Math.floor(newArr[i] / 10);
17
    newArr[i] = newArr[i] % 10;
18
    if (newArr[i + 1]) newArr[i + 1] += mover;
19
    else if (mover > 0) newArr[i + 1] = mover;
20
  }
21
​
22
  return newArr.reverse().join``.replace(/^(0(?!$))+/, '');
23
 }