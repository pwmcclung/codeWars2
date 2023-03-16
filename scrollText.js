function scrollingText(text){
  let newText = text.toUpperCase();
  let newArr = [...newText].map((e,i) =>newText.slice(i) + newText.slice(0,i));
  return newArr
}
