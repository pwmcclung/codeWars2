var sing = function () {
    let newStr = []
    let line1= '',line2= ''
   for(let beer=99;beer >=0;beer--){
     if(beer > 1){
       line1=`${beer} bottles of beer on the wall, ${beer} bottles of beer.`;
       newStr.push(line1)
       if (beer > 2){
         line2=`Take one down and pass it around, ${beer - 1} bottles of beer on the wall.`;
         newStr.push(line2)
       }else{
         line2=`Take one down and pass it around, ${beer - 1} bottle of beer on the wall.`;
         newStr.push(line2)
       }
     }else if(beer ==1 ){
         line1=`${beer} bottle of beer on the wall, ${beer} bottle of beer.`
        line2=`Take one down and pass it around, no more bottles of beer on the wall.`;
        newStr.push(line1)
        newStr.push(line2)
      }else if( beer == 0){
         line1=`No more bottles of beer on the wall, no more bottles of beer.`
        line2=`Go to the store and buy some more, 99 bottles of beer on the wall.`;
        newStr.push(line1)
        newStr.push(line2)
      }
     }
    return newStr
    }