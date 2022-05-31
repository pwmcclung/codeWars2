function twoOldestAges(ages){
    let sorted = ages.sort(function(a, b) {return a - b})
    return [ sorted[sorted.length - 2],sorted[sorted.length - 1],]
    }
    