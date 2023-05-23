function findChildren(santasList, children) {
  let childArr = [];
  for (let i = 0; i < children.length; i++){
    if (santasList.includes(children[i][0].toUpperCase() + children[i].slice(1,))||santasList.includes(children[i][0].toLowerCase() + children[i].slice(1,))){
      childArr.push(children[i]);
    }
  }
  let newChild = [...new Set(childArr)];
  return newChild.sort();
}