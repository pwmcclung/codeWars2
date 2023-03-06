function fiveLine(s){
  s = s.trim()
  let ans =  ''
  let count = 1;
  while (count < 6){
    if (count ===5){
      ans += `${s.repeat(count)}`
      break
    }
    ans += `${s.repeat(count)}\n`
    count++
  }
  return ans
}