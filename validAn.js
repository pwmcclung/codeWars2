var isAnagram = function(s, t) {
    if (s.length !== t.length){
  return false
  }else {
    let t1 = t.toLowerCase()
    t1 = t1.split('').sort().join('');
   let s1 = s.toLowerCase()
  s1 = s1.split('').sort().join('')
    return t1 === s1;
    }
};