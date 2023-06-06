function calculateTotal(team1, team2) {
  if (team1.length === 0 ){
    return false;
  }else if (team2.length === 0){
    return true;
  }
  let t1s = team1.reduce((a,b) => a+b,0);
  let t2s = team2.reduce((a,b)=> a+b,0);
  if (t1s > t2s){
    return true;
  }
  return false;
}