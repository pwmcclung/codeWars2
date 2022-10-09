var regex = /Jo/
function isJojo(name){
  name = name.toLowerCase()
  let firstPart = name.split` `[0]
  let secondPart = name.split` `[1]
  if (firstPart.slice(0,2)==='jo'&& secondPart.slice(0,2)==='jo') return true
  if (firstPart.slice(0,2)==='jo'&& secondPart.slice(-2)==='jo') return true
  if (firstPart.slice(0,3)==='gio'&& secondPart.slice(0,3)==='gio') return true
  return false
}