function movie(card, ticket, perc) {
  
    let choice1 = (number = 0);
     let choice2 = card;
   while (Math.ceil(choice2) >=  choice1) {
      choice1 += ticket;
    choice2 += ticket * Math.pow(perc, ++number);
   }
   return number;
   
 };