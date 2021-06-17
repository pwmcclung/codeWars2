function warnTheSheep(queue) {
    let whereTheWolfAt = queue.indexOf('wolf')
     return whereTheWolfAt === queue.length-1 ? "Pls go away and stop eating my sheep"
     :`Oi! Sheep number ${queue.length -1 -whereTheWolfAt}! You are about to be eaten by a wolf!`
   }