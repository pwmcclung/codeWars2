function createPhoneNumber(numbers){
    let first = []
    let mid = []
    let end = []
    for (let i = 0; i < 3; i++){
      first.push(numbers[i])
    }
    for (let i = 3; i< 6;i++){
      mid.push(numbers[i])
      }
    for (let i = 6; i<=10;i++){
      end.push(numbers[i])
      }
    first = first.join('')
    mid = mid.join('')
    end = end.join('')
   return `(${first}) ${mid}-${end}`
  }