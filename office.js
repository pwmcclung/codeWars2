function meeting(x, need){
    let chairArr = [];
     x.map(v => chairArr.push(v[1] - v[0].length >= 0 ? v[1] - v[0].length : 0));
     for (let i = 0; i <= chairArr.length; i++) {
       if (chairArr.slice(0, i).reduce((a, b) => a + b, 0) >= need) {
         chairArr = chairArr.slice(0, i);
         break;
       }
     }
     while (chairArr.reduce((a, b) => a + b, 0) > need) {
       chairArr[chairArr.length - 1]--;
     }
     if (need === 0) return "Game On";
     if (chairArr.reduce((a, b) => a + b, 0) < need) return "Not enough!";
     return chairArr;
   }