function direction(facing, turn){
    let startDir = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
   let posNum = startDir.indexOf(facing);
   let turns = turn/45;
   let end = (posNum+turns) % startDir.length;
   return startDir.slice(end)[0];
 }
 