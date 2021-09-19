function validateBattlefield(field) {
    let score = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
    for (var boat = [10,0,0,0,0], row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if ( score(row,col) ) {
          if ( score(row-1, col-1) || score(row-1, col+1) ) return false; 
          if ( score(row-1, col  ) && score(row  , col-1) ) return false; 
          if ( ( field[row][col] += score(row-1, col) + score(row, col-1) ) > 4 ) return false; 
          boat[field[row][col]]++; boat[field[row][col] - 1]--;
    } } }
    return [0,4,3,2,1].every((s,i) => s == boat[i]);
  }