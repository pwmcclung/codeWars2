function isFlush(cards) {
    let flushed = cards.every(x => cards[0].slice(-1) === x.slice(-1))
    return flushed
   }