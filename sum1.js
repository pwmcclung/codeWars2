let newArr = [];

function sum(num, x = num) {
  if (num == 0) return 1;
  if (num < 0 || x == 0) return 0;
  if (newArr[num] && newArr[num][x]) return newArr[num][x];
  let ttl = sum(num, x - 1) + sum(num - x, x);
  if (!newArr[num]) {
    newArr[num] = [];
  }
  newArr[num][x] = ttl;
  return ttl;
}