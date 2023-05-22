function bingo(ticket, win){
 let result = '';
  if (ticket.filter(x => x[0].split('').some(y => y.charCodeAt(0) == x[1])).length >= win){
    result = 'Winner!'
  } else{
    result = 'Loser!';
  }
  return result;
}