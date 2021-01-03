function time(distance,boatSpeed,stream){
    let arr = stream.split(' ')
    let speed = Number(arr[1])
    let val = 0
    if (arr[0] == 'Upstream'){
      val = distance / (boatSpeed - speed)
      return Number(val.toFixed(2))
    }else if ( arr[0] == 'Downstream'){
      val = distance / (boatSpeed + speed)
      return Number(val.toFixed(2))
    }
    }