function boredom(staff){
    let scores = {'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 
                  'trading':6, 'change':6, 'IS':8, 'retail':5,'cleaning':4, 'pissing about':25}
    let total= 0;
    for (let key in staff){
      total += scores[staff[key]]
    }
    if (total <=80){
      return 'kill me now'
    }else if (total < 100){
      return 'i can handle this'
    }else{
      return 'party time!!'
    }
  }