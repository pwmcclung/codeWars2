function getOrder(input) {
  let foods = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
  let arr1 = [];
  let arr2 = [];
  for ( let i = 0; i < foods.length; i++ ){
    arr1.push(input.match( new RegExp(`${foods[i]}`, 'gi')));
  }
  arr2 = arr2.concat(...arr1).filter(x => x).map(x => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()).join(' ');
  return arr2;
  
}