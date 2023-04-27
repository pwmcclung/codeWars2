function colorOf(r,g,b){
  let left = r.toString(16);
  let middle = g.toString(16);
  let right = b.toString(16);
 if (left.length <2){
   left = '0' + String(left)
 }
  if (middle.length <2){
   middle = '0' + String(middle)
 }
  if (right.length <2){
   right = '0' + String(right)
 }
 
   return `#${left}${middle}${right}`
  
}
