function multiTable(number) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${number} = ${number*i+number}`).join('\n')
  }