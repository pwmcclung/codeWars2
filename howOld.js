function  calculateAge(alpha,beta) {
    if (alpha > beta && +alpha -beta == 1)return `You will be born in ${+alpha-beta} year.`
    else if (alpha < beta && +beta -alpha == 1)return `You are ${beta-alpha} year old.`
    else if (alpha > beta)return `You will be born in ${+alpha-beta} years.`
    else if (alpha< beta) return `You are ${beta-alpha} years old.`
    return 'You were born this very year!'
  }