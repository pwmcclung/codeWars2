function race(v1, v2, g) {
    if (v2 <= v1){
      return null
    }
  let time = Math.floor((3600 * g) / (v2 - v1))
  let timeArr =  [Math.floor(time /3600), Math.floor(time/60) % 60, time % 60]
  return timeArr
}