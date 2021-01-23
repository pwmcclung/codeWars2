function josephus(items,k){
    let position = 0;
   let array = [] 
   while (items.length > 0) {
     position = (position + (k - 1)) % items.length;
     array.push(...items.splice(position, 1));
   }
   return array
 }