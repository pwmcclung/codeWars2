function solve(s){
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let arr = s.split('').sort().join('');
  return alpha.includes(arr);
}