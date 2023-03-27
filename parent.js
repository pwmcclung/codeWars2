function findChildren(dancingBrigade) {
	let arr = dancingBrigade.split('')
  let sortedArr = arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
  let newStr = sortedArr.join('')
  return newStr
}