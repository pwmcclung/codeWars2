function sort(items){
  for (let i = 0; i <items.length-1; i++){
    for (let j = i+1; j<items.length; j++){
      if (items[j]<items[i]){
        let temp = items[j]
        items[j] = items[i]
        items[i] = temp
      }
    }
  }
  return items
}