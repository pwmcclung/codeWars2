function howMuchILoveYou(nbPetals) {
    let phrases = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
  ]
    return phrases[nbPetals % 6]
  }
  