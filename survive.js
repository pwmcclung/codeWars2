function hasSurvived(attackers, defenders){ 
    let didSurvive = defenders.length - attackers.length;
    for (let i = 0; i < attackers.length && i < defenders.length; i++){
      didSurvive += (defenders[i] > attackers[i]) - (defenders[i] < attackers[i]);
    }
    return didSurvive > 0 || didSurvive == 0 && attackers.reduce((x,y) => x + y, 0) <= defenders.reduce((c,d) => c + d, 0);
  }
  